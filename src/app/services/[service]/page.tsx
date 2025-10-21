export default async function Service({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  return (
    <div className="min-h-screen bg-white">
      (IN Progress) My Service: {service}
    </div>
  );
}
