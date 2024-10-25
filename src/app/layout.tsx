import "./globals.css"

import AnnouncementBar from "@/components/AnnouncementBar"

export const metadata = {
  title: 'eCommerce',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AnnouncementBar announcementText="20% off on many product. Shop now." />
        {children}
      </body>
    </html>
  )
}
