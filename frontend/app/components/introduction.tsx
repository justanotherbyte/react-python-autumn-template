export default function Intro() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome to the React + Python Autumn template
        </h1>
        <p className="text-muted-foreground">
          Explore Autumn&apos;s core functions and shadcn/ui pricing components.
        </p>
      </div>

      {/* Setup Requirements */}
      <div className="p-6 border rounded-xs bg-stone-100 space-y-4">
        <h2 className="font-semibold">Before you get started</h2>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-stone-300" />
            <span>
              Define your pricing plans in the{" "}
              <a
                href="https://app.useautumn.com/sandbox/products"
                className="text-stone-700 underline underline-offset-4 hover:text-stone-900"
                target="_blank"
              >
                Autumn dashboard
              </a>
            </span>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-stone-300" />
            <span>
              Create your Autumn secret key{" "}
              <a
                href="https://app.useautumn.com/sandbox/dev"
                className="text-stone-700 underline underline-offset-4 hover:text-stone-900"
                target="_blank"
              >
                here
              </a>{" "}
              and add it to your environment variables.
            </span>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-stone-300" />
            <span>
              Connect your Stripe account{" "}
              <a
                href="https://app.useautumn.com/sandbox/integrations/stripe"
                className="text-stone-700 underline underline-offset-4 hover:text-stone-900"
                target="_blank"
              >
                here
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}