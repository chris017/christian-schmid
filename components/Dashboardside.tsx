"use client"
import { useBalance } from 'wagmi'
import { useAccount, useTransaction } from 'wagmi'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

import { useEffect, useState } from 'react'

const useEthTransactions = (address: string | undefined) => {
  const [transactions, setTransactions] = useState<any[]>([]);
  const apiKey = 'P8DGG51E48A74WJXXA5MTKBFVWCGGJ115U'; // Ersetze dies durch deinen tatsächlichen Etherscan API-Key

  useEffect(() => {
    const fetchTransactions = async () => {
      if (!address) return;
      const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${apiKey}`;
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.status === '1' && data.message === 'OK') {
        setTransactions(data.result);
      
      } else {
        setTransactions([]);
      }
    };

    fetchTransactions();
  }, [address]);

  return transactions;
};

const useEthPrice = () => {
  const [price, setPrice] = useState<number | null>(null);
  const apiKey = 'P8DGG51E48A74WJXXA5MTKBFVWCGGJ115U'; // Ersetze dies durch deinen tatsächlichen Etherscan API-Key

  useEffect(() => {
    const fetchPrice = async () => {
      const url = `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      if(data.status === '1' && data.message === 'OK') {
        setPrice(parseFloat(data.result.ethusd)); // Setze den ETH-Preis basierend auf der API-Antwort
      }
    };

    fetchPrice();
  }, []);

  return price;
};

export default function Dashboardside() {
  const account = useAccount()
  const { data, isError, isLoading } = useBalance({
    address: account?.address,
    formatUnits: 'ether',
  })
  const ethPrice = useEthPrice();
  const transactions = useEthTransactions(account?.address);
  const ethValueInUsd = data?.formatted && ethPrice ? parseFloat(data.formatted) * ethPrice : null;

  return (
    <div className="flex flex-col h-screen min-h-screen overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col md:flex-row items-center gap-4 p-4 md:gap-6 md:p-10">
          <div className="flex-1">
            <h1 className="font-semibold text-lg"><span className='bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient'>ERC20 Dashboard:</span> {ethValueInUsd !== null ? `${ethValueInUsd.toFixed(2)} USD` : '0 USD'}</h1>
          </div>
          <w3m-button />
        </div>
        <div className="p-4 md:p-10">
          <div className="overflow-x-auto rounded-md border">
            <Table>
            <TableHeader className="text-sm">
            <TableRow>
              <TableHead>Tx</TableHead>
              <TableHead>Block</TableHead>
              <TableHead>From</TableHead>
              <TableHead>To</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-sm">
            {transactions.map((tx) => (
              <TableRow key={tx.hash}>
                <TableCell>{`${tx.hash.substring(0, 10)}...${tx.hash.substring(tx.hash.length - 4)}`}</TableCell> {/* Tx Hash */}
                <TableCell>{tx.blockNumber}</TableCell> {/* Block */}
                <TableCell>{tx.from}</TableCell> {/* From */}
                <TableCell>{tx.to}</TableCell> {/* To */}
                <TableCell>{tx.value ? `${(parseInt(tx.value) / 1e18).toFixed(4)} ETH` : '—'}</TableCell> {/* Value */}
              </TableRow>
            ))}
          </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}
