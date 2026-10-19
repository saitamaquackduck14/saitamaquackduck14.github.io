export const albums = [
  { id: "233434656", title: "Luciferian Towers", slug: "luciferian-towers" },
  { id: "1190052387", title: "Asunder, Sweet and Other Distress", slug: "asunder-sweet-and-other-distress" },
  { id: "1158321089", title: "ALLELUJAH! DON'T BEND! ASCEND!", slug: "allelujah-dont-bend-ascend" },
  { id: "2774839555", title: "Yanqui U.X.O.", slug: "yanqui-u-x-o" },
  { id: "1751605820", title: "Lift Your Skinny Fists Like Antennas To Heaven", slug: "lift-your-skinny-fists-like-antennas-to-heaven" },
  { id: "3803531554", title: "Slow Riot for New Zero Kanada", slug: "slow-riot-for-new-zero-kanada" },
  { id: "3011890020", title: "F# A# ∞", slug: "f-a" },
].map(album => ({
  ...album,
  artist: "Godspeed You! Black Emperor",
  url: `https://godspeedyoublackemperor.bandcamp.com/album/${album.slug}`,
  embedUrl: `https://bandcamp.com/EmbeddedPlayer/album=${album.id}/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/`,
}))
