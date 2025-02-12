import AdminHeader from "@/Components/AdminHeader"

export default function AdminPanel ({children}){
    return (
        <section>
            <AdminHeader/>
            {children}
        </section>
    )
}