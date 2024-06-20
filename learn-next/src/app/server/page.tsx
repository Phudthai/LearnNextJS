import { authConfig } from "@/src/app/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ServerPage() {
    const session = await getServerSession(authConfig);

    if (!session) {
        redirect("/api/auth/signin?callbackUrl=/server");
    }
}