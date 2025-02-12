import learn from '@/Components/learn'
import Link from 'next/link'
import React from 'react'


function AdminProfile() {
    return (
        <div>
            <div>AdminProfile hy</div>
            {/* Link Tag */}
            <Link href="/language/java">GO to New </Link>
            {/* dynamic route */}
            <Link href={`/dynamic_route/34`}>GO to Profile </Link>
            <learn/>
        </div>
    )
}

export default AdminProfile