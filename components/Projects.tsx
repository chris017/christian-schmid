"use client";
/**
 * Parts of this code were generated by v0 by Vercel.
 * @see https://v0.dev/t/PV2ndTry9eB
 */
import axios from 'axios';
import { useState, useEffect } from 'react';

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { GitBranch, Star, MoreHorizontal, Github, Cpu, User, Bitcoin } from "lucide-react";

function formatTimeAgo(lastUpdated: null) {
  if (lastUpdated) {
    const now = new Date().getTime();
    const updatedTime = new Date(lastUpdated).getTime();
    const timeDiffInMilliseconds = now - updatedTime;
    const seconds = Math.floor(timeDiffInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

  if (days >= 1) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours >= 1) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (minutes >= 1) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
    return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
  }
}
else {
  return ""; // Return an empty string or another default value when lastUpdated is null
}
}


export function Projects() {
  const [lastUpdatedEth, setLastUpdatedEth] = useState(null);
  const [stars, setStars] = useState(null);

  const fetchRepoEth = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/chris017/alchemy-ethereum-bootcamp`,
      );
      if (response.status === 200) {
        const repoData = response.data;
        setLastUpdatedEth(repoData.updated_at);
        setStars(repoData.stargazers_count);
      }
    } catch (error) {
      console.error('Error fetching repo information:', error);
    }
  };
  const [lastUpdatedChristian, setLastUpdatedChristian] = useState(null);
  const fetchRepoChristianSchmid = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/chris017/christian-schmid`,
      );
      if (response.status === 200) {
        const repoData = response.data;
        setLastUpdatedChristian(repoData.updated_at);
      }
    } catch (error) {
      console.error('Error fetching repo information:', error);
    }
  };

  const [lastUpdatedPyGui, setLastUpdatedPyGui] = useState(null);
  const fetchRepoPyGui = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/chris017/py-gui-microchips`,
      );
      if (response.status === 200) {
        const repoData = response.data;
        setLastUpdatedPyGui(repoData.updated_at);
      }
    } catch (error) {
      console.error('Error fetching repo information:', error);
    }
  };

  useEffect(() => {
    fetchRepoEth();
    fetchRepoChristianSchmid();
    fetchRepoPyGui();
  }, []);

  return (
    <div className="flex flex-col " id='Projects'>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 ">
      <h1 className="text-4xl sm:flex justify-end font-bold mb-10 ">Some of <span className='bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient'>&nbsp;my work</span></h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full mx-auto">
        <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <User className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>Portfolio</CardTitle>
                <CardDescription>Showing off</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="ml-auto" size="icon" variant="ghost">
                    <MoreHorizontal className="w-4 h-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem><a href="https://github.com/chris017/christian-schmid" target='_blank'>View Project</a></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Github className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">{formatTimeAgo(lastUpdatedChristian)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitBranch className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">main</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Bitcoin className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>Course</CardTitle>
                <CardDescription>Alchemy Bootcamp Solutions</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="ml-auto" size="icon" variant="ghost">
                    <MoreHorizontal className="w-4 h-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem><a href="https://github.com/chris017/alchemy-ethereum-bootcamp" target='_blank'>View Project</a></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Github className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">{formatTimeAgo(lastUpdatedEth)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitBranch className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">main</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">{stars}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Cpu className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>Py Gui</CardTitle>
                <CardDescription>Microchip OS for G+D</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="ml-auto" size="icon" variant="ghost">
                    <MoreHorizontal className="w-4 h-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem><a href="https://github.com/chris017/py-gui-microchips" target='_blank'>View Project</a></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Github className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">{formatTimeAgo(lastUpdatedPyGui)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitBranch className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">main</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}