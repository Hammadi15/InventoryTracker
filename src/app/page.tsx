"use client"
import Image from "next/image";
import Card from "@/components/Card";
import { useState } from "react";



export default function Home() {
  return <>
  <div className="flex flex-wrap gap-x-12">
  <Card name="test" userName = "d"/>
  <Card name="test" userName = "Nermin"/>

  </div>
  </>;
}
