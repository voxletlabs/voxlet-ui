import ChatWidget from '@/registry/default/ui/chat-widget'

export default function ChatWidgetDemo() {

    return (
        <div>
            <ChatWidget
                email="contact.voxlet@gmail.com"
                calendarLink="https://cal.com/muhammadkaifnazeer/video-call-meeting"
            />

            {/* Cutomize your Chat Widget */}
            {/* <ChatWidget
                email="contact@voxlet.com"
                calendarLink="https://cal.com/voxlet"
                className="bottom-10 right-10"
                logo="/custom-logo.png"
                greeting="Welcome to Voxlet 🚀"
                headline="What can we build together?"
            /> */}

            <div className="flex min-h-[100px] w-full justify-center p-2 sm:p-10 items-center">
                <div className="relative w-full flex items-center justify-center">
                    <p className="text-black dark:text-white max-w-xl text-center">
                        👉 The chat widget will appear in the bottom-right corner of the page. Look for the blue button in the bottom-right corner.
                    </p>
                </div>
            </div>
        </div>
    )
}
