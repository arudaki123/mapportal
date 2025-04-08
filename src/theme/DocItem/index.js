import React from "react";
import DocItem from "@theme-original/DocItem";
import ErrorBoundary from "@docusaurus/ErrorBoundary";

export default function DocPageWrapper(props) {
    return (
        <ErrorBoundary  fallback={({error, tryAgain}) => (
            <div>
                <p>This component crashed because of error: {error.message}.</p>
                <button onClick={tryAgain}>Try Again!</button>
            </div>
        )}>
            <DocItem {...props} />
        </ErrorBoundary>
    );
}