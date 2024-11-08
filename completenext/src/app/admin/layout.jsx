import AdminHeader from '@/components/AdminHeader/page'


const page = ({children}) => {
  return (
    <div>
        <AdminHeader />
        {children}
    </div>
  )
}

export default page