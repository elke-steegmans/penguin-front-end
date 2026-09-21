import Header from '@components/header'
import UserOverview from '@components/users/UserOverview'
import UserService from '@services/UserService'

async function getUsers() {
  const userResponse = await UserService.getAll()
  return userResponse.json()
}

export default async function PlayersPage() {
  const users = await getUsers()

  return (
    <>
      <Header />
      <main className="p-6 min-h-screen flex flex-col items-center">
        <h1>Players</h1>

        <section className="mt-5">
          {users && <UserOverview users={users} />}
        </section>
      </main>
    </>
  )
}
