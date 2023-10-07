import React, { useState } from 'react';
import TextImage from '../../TextImage/TextImage';
import { calculateAccountAge } from '../../../Utils/converter';
import { Link } from 'react-router-dom';

type Notification = {
    id: number;
    name: string;
    photo: string;
    time: string;
    message: string;
    read: boolean;
};

const NotificationList: React.FC = ({ dataList }: any) => {
    const notifications = dataList;
    return (
        <div className="relative">
            <div className='flex flex-row justify-between'>
                <h1 className="text-3xl font-bold">Notifications</h1>
            </div>
            {/* <button className="bg-indigo-500 text-white p-2 rounded-md">Mark as read</button> */}

            <div className="absolute mt-2 w-full rounded-md shadow-lg bg-white">
                <div className="py-2">
                    {notifications.map((notification: any) => {
                        const name = notification?.fromUser?.name;
                        const dbId = notification?.fromUser?.dbId;
                        const pfp = notification?.fromUser?.pfp;
                        // console.log(`name = ${name} , dbId = ${dbId} , pfp = ${pfp}`)
                        return (
                            <Link to={`/userprofile/${dbId}`}>
                                <div key={notification._id} className={`flex items-center px-4 py-3 hover:bg-gray-100 ${notification.read ? 'bg-gray-200' : 'bg-white'}`}>
                                    {
                                        pfp ?
                                            <img src={pfp} alt={name} className="h-10 w-10 rounded-full" />
                                            :
                                            <TextImage height={'40px'} width={'40px'} text={name} />
                                    }
                                    <div className='ml-4'>
                                        <div>
                                            <strong>{name}</strong> followed you
                                        </div>
                                        <div className="text-sm text-gray-500">{calculateAccountAge(notification.createdAt)} ago</div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>

            </div>
        </div>
    );
};

export default NotificationList;
