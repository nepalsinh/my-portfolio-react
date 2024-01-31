import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md";
import { FaSchool } from "react-icons/fa";

function Timeline() {
    return (
        <div id='timeline'>
            <div className='flex flex-col justify-center items-center py-5'>
                <div className='font-semibold text-2xl'>
                    MY TIMELINE
                </div>
                <div className='h-1 bg-white w-20 rounded-lg'>
                </div>
            </div>
            <div className='my-10'>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2023"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaSchool />}
                    >
                        <h3 className="vertical-timeline-element-title text-black">Higher Secondary
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle text-black">12th</h4>
                        <p className='text-black'>

                            Got 90% in Board
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2021 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title text-black">DDU,Nadiad</h3>
                        <h4 className="vertical-timeline-element-subtitle text-black">Currently I am persuing my B.Tech</h4>
                        <p className='text-black'>
                            Computer Engineering
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2023"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title text-black">Participated in Duhacks Hackathonr</h3>
                        <p className='text-black'>
                            Created Project based on web development given in project Section.
                        </p>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Timeline