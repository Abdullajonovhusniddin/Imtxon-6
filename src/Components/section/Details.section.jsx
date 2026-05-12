import { useState } from "react";

const tabs = [
    {
        name: 'Details',
        content: [
            'Create and edit video content for multi-platform use and distribution for social media channels (Facebook, Youtube, Instagram, Snapchat, IGTV, Facebook Stories and Instagram Stories).',
            'Design & Create highly engaging industry-related content in both photo, gif & video format.',
            'Publish Posts on various social media channels.',
        ],
    },
    {
        name: 'Requirements',
        content: [
            'Bachelor’s degree in marketing, communications, design, or a related field.',
            '2+ years of experience in content creation or social media management.',
            'Strong written and visual storytelling skills.',
        ],
    },
    {
        name: 'Responsibilities',
        content: [
            'Collaborate with design and marketing teams to create campaign assets.',
            'Manage publication schedules and ensure timely distribution.',
            'Analyze engagement metrics and improve content strategy.',
        ],
    },
];

export default function Details() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="mb-24">
            <div className="containers bg-[#ECF8F9]">
                <ul className="border-b-2 border-solid border-[#E0F1F2] flex justify-center items-center gap-24">
                    {tabs.map((tab, index) => (
                        <li
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`cursor-pointer font-semibold text-2xl leading-9 pb-5 ${index === activeTab ? 'border-b-4 border-solid border-[#454DFD] text-[#454DFD]' : 'text-[#8A8A8A]'}`}
                        >
                            {tab.name}
                        </li>
                    ))}
                </ul>

                <ul className="flex flex-col gap-5 px-54.75 py-24">
                    {tabs[activeTab].content.map((item, index) => (
                        <li key={index} className="list-disc">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}