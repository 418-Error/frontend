export function PageGeneral() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-60 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center leading-9 tracking-tight text-gray-900">BIENVENUE SUR</h2>
        <img className="mx-auto h-12 w-auto" src="logo.svg" alt="Your Company"/>
        <div className="flex flex-col justify-center mt-4">
          <h2 className="text-center tracking-tight text-gray-900">Pensez-vous être écolo ? En êtes-vous sûr ?</h2>
          <h2 className="text-center tracking-tight text-gray-900">418GREEN vous le dira.</h2>
        </div>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="mt-10 space-y-6">
          <div className="flex items-center mt-6 flex-col gap-4">
            <a
              className="flex h-12 w-3/4 items-center justify-center gap-3 rounded-md px-3 py-1.5 text-[#7ECA9C] border border-[#7ECA9C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
            >
              <span className="text-sm font-semibold leading-6">Démarrer sans se connecter</span>
            </a>
            <a
              href="http://localhost:3333/authentication/social/redirect"
              className="flex h-12 w-3/4 items-center justify-center gap-3 rounded-md bg-[#7ECA9C] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
            >
              <img className="h-5 w-5" aria-hidden="true" src="google_logo.svg"/>
              <span className="text-sm font-semibold leading-6">Démarrer avec Google</span>
            </a>
          </div>
        <p className="font-thin text-xs text-center">Si vous vous connectez avec Google, vous pourrez reprendre votre partie même après avoir fermé votre navigateur</p>
        </div>
      </div>
    </div>
  )
}