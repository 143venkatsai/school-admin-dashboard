import React from 'react'

const Settings = () => {
  return (
    <>
    <section>
        <h1 className="text-4xl font-bold mb-4">Settings</h1>
    </section>
    <section className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='bg-white p-6 rounded-lg shadow-xl'>
            <h2 className='text-2xl font-semibold mb-1'>Profile Settings</h2>
            <p className="text-gray-500 mt-0">Update your personal information and contact details</p>
            <form className='mt-8'>
                <div className='mt-4'>
                    <label className='block text-md font-medium text-gray-700'>Full Name</label>
                    <input type="text" className='mt-1 py-2 px-4 block w-full border border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500' placeholder='Admin User' />         
                </div>
                <div className='mt-4'>
                    <label className='block text-md font-medium text-gray-700'>Email</label>
                    <input type="email" className='mt-1 py-2 px-4 block w-full border border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500' placeholder='admin@example.com' />         
                </div>
                <div className='mt-4'>
                    <label className='block text-md font-medium text-gray-700'>Phone</label>
                    <input type="text" className='mt-1 py-2 px-4 block w-full border border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500' placeholder='+1-555-0123' />         
                </div>
                <button type="submit" className='bg-blue-500 text-white font-semibold px-5 py-3 mt-6 rounded-lg shadow-xl cursor-pointer'>Update Profile</button>
            </form>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-xl'>
            <h2 className='text-2xl font-semibold mb-1'>System Settings</h2>
            <p className="text-gray-500 mt-0">Configure system preferences and default options</p>
            <form className='mt-8'>
            <div className='mt-4'>
                <label className='block text-md font-medium text-gray-700'>
                    Default Language
                </label>
                <select
                    className='mt-1 py-3 px-4 block w-full border border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                    defaultValue="English"
                >
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                </select>
            </div>

            <div className='mt-4'>
                <label className='block text-md font-medium text-gray-700'>
                    Time Zone
                </label>
                <select
                    className='mt-1 py-3 px-4 block w-full border border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                    defaultValue="GMT+5:30"
                >
                    <option value="GMT+5:30">GMT +5:30 (IST)</option>
                    <option value="GMT+0">GMT</option>
                    <option value="GMT-5">GMT -5:00 (EST)</option>
                </select>
            </div>

            <button
                type="submit"
                className='bg-blue-500 text-white font-semibold px-5 py-3 mt-6 rounded-lg shadow-xl cursor-pointer'
            >
                Save Settings
            </button>
            </form>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-xl'>
            <h2 className='text-2xl font-semibold mb-1'>Security Settings</h2>
            <p className="text-gray-500 mt-0">Manage your account security and privacy options</p>
            <div className='mt-8'>
                <div className='flex items-center justify-between mb-4'>
                    <div>
                    <span className='text-md font-medium text-gray-700'>Email Notifications</span>
                    <p className='text-gray-500 text-sm'>Recieve updates via email</p>
                    </div>
                    <input type="checkbox" className='h-5 w-5' />
                </div>
                <div className='flex items-center justify-between mb-4'>
                    <div>
                    <span className='text-md font-medium text-gray-700'>Performance Reports</span>
                    <p className='text-gray-500 text-sm'>Weekly performance summaries</p>
                    </div>
                    <input type="checkbox" className='h-5 w-5' />
                </div>
                <div className='flex items-center justify-between mb-4'>
                    <div>
                    <span className='text-md font-medium text-gray-700'>New School Alerts</span>
                    <p className='text-gray-500 text-sm'>Notifications for new school registrations</p>
                    </div>
                    <input type="checkbox" className='h-5 w-5' />
                </div>
            </div>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-xl'>
            <h2 className='text-2xl font-semibold mb-1'>Account Management</h2>
            <p className="text-gray-500 mt-0">Manage your account and data preferences</p>  
            <div className='mt-8'>
                <h2>Export Data</h2>
                <div className='flex flex-wrap gap-4 mt-2'>
                    <button className='border border-2 border-gray-500 shadow-lg cursor-pointer px-2 py-1 rounded-xl'>
                        Export Student Data     
                    </button>
                    <button className='border border-2 border-gray-500 shadow-lg cursor-pointer px-2 py-1 rounded-xl'>
                        Export School Reports
                    </button>
                    <button className='border border-2 border-gray-500 shadow-lg cursor-pointer px-2 py-1 rounded-xl'>
                        Export Analytics
                    </button>
                </div>
                <div className='mt-6'>
                    <h2>Back Up</h2>
                    <button className='border border-2 border-gray-500 shadow-lg cursor-pointer px-2 py-1 rounded-xl mt-2 mb-2'>
                        Create Back Up     
                    </button>
                    <p className='text-sm text-gray-500'>Last backup: March 15, 2024</p>    
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Settings