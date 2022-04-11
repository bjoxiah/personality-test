const ErrorFallback = (obj: any) => {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{obj.error.message}</pre>
        <button onClick={() => obj.resetErrorBoundary()}>Try again</button>
      </div>
    )
  }

export default ErrorFallback;