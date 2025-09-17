"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function Home() {
	const trpc = useTRPC();
	const { data } = useQuery(trpc.hello.queryOptions({ text: "Hello!" }));

	return (
		<div className="">
		  {JSON.stringify(data)}
		</div>
	);
}
