import { FiGrid, FiFileText, FiUsers, FiFile, FiCalendar, FiBell, FiSettings, FiLogOut,
} from "react-icons/fi"
import Link from "next/link"
import { signOut, getSession } from "next-auth/react"
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import { useEffect } from "react"
import { useRouter } from "next/router"

function AdminSidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 min-h-screen bg-white border-r">
      <div className="flex items-center gap-2 px-6 py-6 font-bold text-2xl text-blue-700 border-b">
        <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
          SV
        </span>
        Sky Visa
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1">
        <Link
          href="/admin"
          className="flex items-center gap-3 px-4 py-2 rounded-lg font-medium text-blue-700 bg-blue-50"
        >
          <FiGrid /> Dashboard
        </Link>

        <Link
          href="/admin/applications"
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50"
        >
          <FiFileText /> Applications
        </Link>

        <Link
          href="/admin/clients"
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50"
        >
          <FiUsers /> Clients
        </Link>

        <Link
          href="/admin/documents"
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50"
        >
          <FiFile /> Documents
        </Link>

        <Link
          href="/admin/appointments"
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50"
        >
          <FiCalendar /> Appointments
        </Link>

        <Link
          href="/admin/notifications"
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50"
        >
          <FiBell /> Notifications
        </Link>

        <Link
          href="/admin/settings"
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50"
        >
          <FiSettings /> Settings
        </Link>
      </nav>

      <button
        onClick={() => signOut({ callbackUrl: "/signin" })}
        className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-red-50 w-full mt-4"
      >
        <FiLogOut /> Sign Out
      </button>
    </aside>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    }
  }
  return { props: { session } }
}

export default function AdminPage({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()

  /* 🔐 30-min idle-logout */
  useEffect(() => {
    let timeout: NodeJS.Timeout

    const resetTimer = () => {
      clearTimeout(timeout)
      timeout = setTimeout(
        () => signOut({ callbackUrl: "/signin" }),
        30 * 60 * 1000 // 30 minutes
      )
    }

    // kick-off + bind events
    resetTimer()
    window.addEventListener("mousemove", resetTimer)
    window.addEventListener("keydown", resetTimer)
    window.addEventListener("click", resetTimer)

    return () => {
      clearTimeout(timeout)
      window.removeEventListener("mousemove", resetTimer)
      window.removeEventListener("keydown", resetTimer)
      window.removeEventListener("click", resetTimer)
    }
  }, [router])

  return (
    <div className="flex">
      <AdminSidebar />

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">
          Welcome, {session?.user?.email ?? "Admin"}!
        </h1>

        {/* TODO:  Replace with real dashboard widgets */}
        <div className="rounded-lg border border-dashed border-gray-300 p-10 text-center text-gray-500">
          Your dashboard content goes here.
        </div>
      </main>
    </div>
  )
}
