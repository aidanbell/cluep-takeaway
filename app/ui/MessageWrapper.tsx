"use client";

import { useState, useEffect, Suspense } from "react";

import SearchBar from "./SearchBar";
import Messages from "./Messages";

export default function MessageWrapper() {

  return (
    <>
      <SearchBar/>
      <Messages/>
    </>
  )
}