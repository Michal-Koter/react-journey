import {Suspense} from "react";
import fs from "node:fs";

import RSCDemo from "@/components/RSCDemo";
import ClientDemo from "@/components/ClientDemo";
import DataFetchingDemo from "@/components/DataFetchingDemo";
import ServerActionDemo from "@/components/ServerActionDemo";
import UsePromiseDemo from "@/components/UsePromisesDemo";
import ErrorBoundary from "@/components/ErrorBoundery";

export default async function Home() {
    const fetchUsersPromise = new Promise((resolve, reject) => {
        const data = fs.readFileSync('dummy-db.json', 'utf-8');
        const users = JSON.parse(data);
        resolve(users);
        // reject(new Error("Failed to load users"));
    }, 2000);

    return (
        <main>
            {/*
            <ClientDemo >
                <RSCDemo/>
            </ClientDemo>
            */}
            {/*<DataFetchingDemo />*/}
            {/*<ServerActionDemo />*/}
            <ErrorBoundary fallback={<p>Something went wrong!</p>}>
                <Suspense fallback={<p>Loading...</p>}>
                    <UsePromiseDemo usersPromise={fetchUsersPromise} />
                </Suspense>
            </ErrorBoundary>

        </main>
    );
}
