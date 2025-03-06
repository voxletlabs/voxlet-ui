"use client"

import { useState } from "react"
import DownloadButton from "@/registry/default/ui/download-button"

export default function DownloadButtonDemo() {
  const [downloadStatus, setDownloadStatus] = useState<"idle" | "downloading" | "downloaded" | "complete">("idle")
  const [progress, setProgress] = useState(0)

  const simulateDownload = () => {
    setDownloadStatus("downloading")
    setProgress(0)

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval)
          setDownloadStatus("downloaded")
          return 100
        }
        return prevProgress + 5
      })
    }, 200) // Update every 200ms to complete in 4 seconds

    // Show 'Downloaded' state for 1.5 seconds
    setTimeout(() => {
      setDownloadStatus("complete")
    }, 4000 + 1500)

    // Reset to idle state after download completes and 'Downloaded' state is shown
    setTimeout(
      () => {
        setDownloadStatus("idle")
        setProgress(0)
      },
      4000 + 1500 + 100,
    ) // Added 100ms buffer for smoother transition
  }

  const handleClick = () => {
    if (downloadStatus === "idle") {
      simulateDownload()
    }
  }

  return (
    <div className="flex items-center justify-center min-h-[10rem]">
      <DownloadButton
        downloadStatus={downloadStatus}
        progress={progress}
        onClick={handleClick}
        className="hover:shadow-xl transition-shadow duration-300"
      />
    </div>
  )
}

