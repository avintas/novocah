type PagePlaceholderProps = {
  title: string;
  description?: string;
};

export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-brand text-sm font-semibold tracking-wide uppercase">
        California Healthcare Management Group
      </p>
      <h1 className="text-foreground mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="text-muted-foreground mt-4 max-w-xl text-base leading-7">
          {description}
        </p>
      ) : null}
      <p className="border-border bg-surface-muted text-muted-foreground mt-8 inline-flex items-center rounded-full border px-4 py-2 text-sm">
        Content coming soon
      </p>
    </section>
  );
}
