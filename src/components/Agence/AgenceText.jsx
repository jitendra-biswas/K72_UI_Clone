import React from 'react'

const AgenceText = () => {
  return (
    <>
    <div className="h-screen p-[10vw] text-xl flex">
          <div className="left font-[font2] flex flex-col ">
            <p className="h-42">Expertise</p>
            <p>
              Nos projets_ naissent dans l’humilité, grandissent dans la
              curiosité et vivent grâce à la créativité sous toutes ses formes.
            </p>
          </div>
          <div className="right flex flex-col font-[font2]">
            <p className="h-42">
              Stratégie Publicité <br />
              Branding <br />
              Design <br />
              Contenu
            </p>
            <div className="flex gap-10">
              <p>
                Notre création_ bouillonne dans un environnement où le talent a
                le goût d’exploser. Où on se sent libre d’être la meilleure
                version de soi-même.
              </p>
              <p>
                Notre culture_ c’est l’ouverture aux autres. Point. Tout
                l’équipage participe à bâtir une agence dont on est fiers.
              </p>
            </div>
          </div>
        </div>
    </>
  )
}

export default AgenceText
