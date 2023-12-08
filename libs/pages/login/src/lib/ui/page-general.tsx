export function PageGeneral() {
  return (
    <div className="flex h-screen flex-col justify-center items-center gap-4">
      <h2 className="text-center text-xl text-dark-gray">BIENVENUE SUR</h2>
      <img className="w-[210px]" src="logo.svg" alt="Your Company" />
      <div className="flex flex-col gap-12">
        <div className="flex flex-col justify-center mt-4">
          <h2 className="text-center text-dark-gray max-w-[400px]">
            Pensez-vous être écolo ? En êtes-vous sûr ? 418GREEN vous le dira.
          </h2>
        </div>
        <div className="flex items-center flex-col gap-5">
          <a className="flex items-center justify-center gap-3 rounded-lg  w-[345px] h-[54px] text-[#7ECA9C] border border-[#7ECA9C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]">
            <span className="text-base font-semibold leading-6">
              Démarrer sans se connecter
            </span>
          </a>
          <a
            href="http://localhost:3333/authentication/social/redirect"
            className="flex items-center justify-center gap-3 rounded-lg bg-[#7ECA9C] w-[345px] h-[54px] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
          >
            <img className="h-5 w-5" aria-hidden="true" src="google_logo.svg" />
            <span className="text-base font-semibold leading-6">
              Démarrer avec Google
            </span>
          </a>
        </div>
      </div>
      <p className="font-thin text-xs text-center max-w-[400px]">
        Si vous vous connectez avec Google, vous pourrez reprendre votre partie
        même après avoir fermé votre navigateur
      </p>
    </div>
  );
}
