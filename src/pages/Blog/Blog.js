import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    <div>
                        <h3 className="font-semibold">Difference between SQL and NoSQL</h3>
                        <h4 className="font-semibold">SQL</h4>
                        <p className="mt-1 dark:text-gray-400">1. RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</p>
                        <p className="mt-1 dark:text-gray-400">2. These databases have fixed or static or predefined schema</p>
                        <p className="mt-1 dark:text-gray-400">3. These databases are not suited for hierarchical data storage.</p>
                        <p className="mt-1 dark:text-gray-400">4. Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc</p>
                        <h4 className="font-semibold">NoSQL</h4>
                        <p className="mt-1 dark:text-gray-400">1. Non-relational or distributed database system.</p>
                        <p className="mt-1 dark:text-gray-400">2. They have dynamic schema</p>
                        <p className="mt-1 dark:text-gray-400">3. These databases are best suited for hierarchical data storage.</p>
                        <p className="mt-1 dark:text-gray-400">4. Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">What is the difference between javascript and NodeJS?</h3>
                        <h4 className="font-semibold">Javascript</h4>
                        <p className="mt-1 dark:text-gray-400">1. Javascript is a programming language that is used for writing scripts on the website. </p>
                        <p className="mt-1 dark:text-gray-400">2. Javascript can only be run in the browsers.</p>
                        <p className="mt-1 dark:text-gray-400">3. It is basically used on the client-side.</p>
                        <p className="mt-1 dark:text-gray-400">4. Javascript is capable enough to add HTML and play with the DOM.</p>
                        <h4 className="font-semibold">NodeJS</h4>
                        <p className="mt-1 dark:text-gray-400">1. NodeJS is a Javascript runtime environment.</p>
                        <p className="mt-1 dark:text-gray-400">2. We can run Javascript outside the browser with the help of NodeJS.</p>
                        <p className="mt-1 dark:text-gray-400">3. It is mostly used on the server-side.</p>
                        <p className="mt-1 dark:text-gray-400">4. Nodejs does not have capability to add HTML tags.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">What is JWT, and how does it work?</h3>
                        <p className="mt-1 dark:text-gray-400">JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued</p>
                        <p className="mt-1 dark:text-gray-400">JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                            <br />
                            A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                            <br />
                            Once decoded, you will get two JSON strings:
                            <br />
                            The header and the payload.
                            The signature.
                            The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.
                            <br />
                            The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.
                            <br />
                            There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.
                            <br />
                            The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">How does NodeJS handle multiple requests at the same time?</h3>
                        <p className="mt-1 dark:text-gray-400">I don’t specifically know the node.js code, but there are three ways to write a server. It will be one of these three. For the sake of new programmers, I present the three methods, implementation is left as an exercise:

                            <br />
                            1. Iterative - Incoming requests will go on a queue and be processed sequentially in the main loop. A interrupt handler, poll point in the loop, or a separate thread will accept incoming requests and append them to the queue as they arrive.
                            <br />
                            2. Multi-threading - The main loop will accept requests as they arrive and spawn a child thread to deal with it.
                            <br />
                            3. Multi-tasking - At startup the main line code will spawn a number of child processes, either copies of the primary server task or dedicated processor tasks. That number may be fixed or may be auto-ramping to spawn additional children as needed to handle the load. The main loop will then accept requests as they arrive and add them to a queue for one of the child processes either round robin or to the first child that is free. If requests arrive faster than the children can process them the main loop will either queue them for later processing as children free up or ramp up the number of children.
                            I have written all three types in my career for different applications. Iterative uses the fewest resources and is most appropriate if request processing is always brief. Multi-threading offers the best responsiveness to each request, however, massive request submission such as a DOS attack, can swamp the system with more threads than can be processed reasonably. Multi-tasking provides the best mix between the other two options and is my favorite, but managing the ramp-up and ramp-down, if you go that way, can be complicated to get right.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;