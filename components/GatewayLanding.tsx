import React from "react";

const GatewayLanding: React.FC = () => {
    const [accessKey, setAccessKey] = React.useState("");
    const [error, setError] = React.useState("");

    const redirectToWorkspace = (profile: "admin" | "office") => {
        const isLocal =
            window.location.hostname === "localhost" ||
            window.location.hostname === "127.0.0.1";

        if (isLocal) {
            window.location.href = `/?profile=${profile}`;
            return;
        }

        window.location.href = `https://${profile}.federicomosqueira.site`;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const key = accessKey.trim().toLowerCase();

        if (key === "admin") {
            redirectToWorkspace("admin");
            return;
        }

        if (key === "office") {
            redirectToWorkspace("office");
            return;
        }

        setError("Invalid access key.");
    };

    return (
        <main className="min-h-screen bg-[#F7F7F7] flex items-center justify-center px-4">
            <section className="w-full max-w-md bg-white border border-gray-200 shadow-sm px-8 py-10">
                <div className="mb-8">
                    {/* <img
                        src="/app-logos/microsoft-logo.svg"
                        alt="Microsoft"
                        className="h-6 object-contain mb-6"
                    /> */}

                    <h1 className="text-2xl font-semibold text-[#333131]">
                        Private Workspace
                    </h1>

                    <p className="mt-1 text-md text-[#333131]">
                        Restricted access
                    </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            value={accessKey}
                            placeholder="Enter your access key"
                            onChange={(event) => {
                                setAccessKey(event.target.value);
                                setError("");
                            }}
                            className="w-full border-b border-gray-400 px-1 py-2 text-sm outline-none focus:border-[#0067B8]"
                        />
                    </div>

                    <p className="text-xs text-[#0067B8]">
                        Access is available only through authorized workspace links.
                    </p>

                    {error && (
                        <p className="text-xs text-red-600">
                            {error}
                        </p>
                    )}

                    <div className="flex justify-end gap-2 pt-4">
                        <button
                            type="button"
                            onClick={() => {
                                setAccessKey("");
                                setError("");
                            }}
                            className="px-6 py-2 text-sm bg-gray-200 text-[#333131]"
                        >
                            Clear
                        </button>

                        <button
                            type="submit"
                            className="px-6 py-2 text-sm bg-[#0067B8] text-white"
                        >
                            Enter Workspace
                        </button>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default GatewayLanding;