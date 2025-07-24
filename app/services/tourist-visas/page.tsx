"use client"

import Head from "next/head"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Globe, Shield, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
  

function formatProcessing(proc: string) {
  if (!proc) return ""
  // Only add "days" to numeric or numeric ranges, not to VoA, week, month, etc.
  return proc.replace(/(^|\s)(\d+([-/]\d+)?)(?![a-zA-Z])/g, "$2 days")
}

export default function TouristVisasPage() {
  const [search, setSearch] = useState("")
  const [durationFilter, setDurationFilter] = useState("all")
  const searchBoxRef = useRef<HTMLDivElement>(null)
  const [isSticky, setIsSticky] = useState(false)

  // Only make the search box sticky
  useEffect(() => {
    const handleScroll = () => {
      if (!searchBoxRef.current) return
      // Get the vertical position of the search box relative to the viewport
      const searchBoxTop = searchBoxRef.current.getBoundingClientRect().top + window.scrollY
      // Set sticky if the scroll position is past the original position of the search box
      setIsSticky(window.scrollY >= searchBoxTop)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const destinations = [
    { country: "Afghanistan", processing: "3", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752660019/Afghanistan_t3urir.jpg" },
    { country: "Algeria", processing: "4-6", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752659639/Algeria_nabxcu.jpg" },
    { country: "Angola", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644321/Angola_nm671h.jpg" },
    { country: "Argentina", processing: "3", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644322/argentina_qp0dvl.jpg" },
    { country: "Armenia", processing: "3", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644323/Armenia_ceokvn.jpg" },
    { country: "Aruba", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644324/Aruba_pboyqx.jpg" },
    { country: "Australia", processing: "5-35", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644324/Australia_wjcmtl.jpg" },
    { country: "Austria", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752659513/Austria_nugb3k.jpg" },
    { country: "Azerbaijan", processing: "3", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644330/Azerbaijan_jbhhig.jpg" },
    { country: "Switzerland", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644414/Switzerland_xxqyjd.jpg" },
    { country: "Bahrain", processing: "3-5", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644326/Bahrain_xtrzok.jpg" },
    { country: "Bangladesh", processing: "7-10", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644329/Bangladesh_fchnrt.jpg" },
    { country: "Panama", processing: "90", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644395/Panama_o93eo8.jpg" },
    { country: "Belarus", processing: "12", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644332/belarus_ukqgov.jpg" },
    { country: "Belgium", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644324/Belgium_mmafra.jpg" },
    { country: "Belize", processing: "30", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644322/belize_bihk9n.jpg" },
    { country: "Benin", processing: "5", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644321/Benin_wkdun4.jpg" },
    { country: "Papua New Guinea", processing: "4-5", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644394/Papua_New_Guinea_jjmpwq.jpg" },
    { country: "Paraguay", processing: "30", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644394/Paraguay_v2f4jn.jpg" },
    { country: "Bolivia", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644324/bolivia_qgnkiu.jpg" },
    { country: "BosniaandHerzegovina", processing: "3-5", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644327/Bosnia_and_Herzegovina_k4ipe2.jpg" },
    { country: "Botswana", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644327/Botswana_z7jb1i.jpg" },
    { country: "Brazil", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752661658/Brazil_urmvmp.jpg" },
    { country: "Brunei", processing: "7-10", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644333/Brunei_guqbom.jpg" },
    { country: "Bulgaria", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644334/bulgria_rfdrvp.jpg" },
    { country: "BurkinaFaso", processing: "7-70", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644333/Burkina_Faso_tnezgn.jpg" },
    { country: "Burundi", processing: "7", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644338/Burundi_rt2cfm.jpg" },
    { country: "Cambodia", processing: "5", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644338/Cambodia_sstjqv.jpg" },
    { country: "Peru", processing: "5-6", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644404/Peru_zgkghd.jpg" },
    { country: "Canada", processing: "30-60", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752659293/Canada_msjda2.jpg" },
    { country: "Chad", processing: "3-7", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644336/Chad_xx54jx.jpg" },
    { country: "Chile", processing: "6T/20B", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644338/Chile_szzumg.jpg" },
    { country: "China", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752659020/China_w9hxld.jpg" },
    { country: "Colombia", processing: "20", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644338/Colombia_wckfhz.jpg" },
    { country: "Philippines", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644398/Philippines_rluynk.jpg" },
    { country: "Poland", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644399/Poland_yqbbqw.jpg" },
    { country: "RepublicofCongo", processing: "15-20", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644398/Republic_of_the_Congo_bulvdf.jpg" },
    { country: "CostaRica", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644338/Costa_Rica_gjnvrl.jpg" },
    { country: "CotedIvoire", processing: "7", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644341/C%C3%B4te_d_Ivoire_s6kolh.jpg" },
    { country: "Croatia", processing: "60", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644342/Croatia_awgyce.jpg" },
    { country: "Cuba", processing: "4-6", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644342/cuba_peqvh3.jpg" },
    { country: "Cyprus", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644343/Cyprus_rkjylw.jpg" },
    { country: "CzechRepublic", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644342/Czech_Republic_w92xkv.jpg" },
    { country: "Denmark", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752658578/Denmark_m9x6qx.jpg" },
    { country: "Djibouti", processing: "5-6", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644343/Djibouti_ufpqsr.jpg" },
    { country: "Dominica", processing: "VoA", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644352/Dominica_w4tkja.jpg" },
    { country: "DominicanRepublic", processing: "Depends on embassy", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644343/Dominican_Republic_tu1gks.jpg" },
    { country: "Ecuador", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752661436/Ecuador_fmkqkj.jpg" },
    { country: "Egypt", processing: "7-10", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644350/Egypt_cz7i8e.jpg" },
    { country: "Portugal", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644400/Portugal_d7pc1q.jpg" },
    { country: "Qatar", processing: "5-7", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644401/Qatar_fcvhai.jpg" },
    { country: "Estonia", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644346/estonia_ty0esd.jpg" },
    { country: "Ethiopia", processing: "3-4", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644347/Ethiopia_rzprjp.jpg" },
    { country: "Fiji", processing: "Working days", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644348/Fiji_cuph5p.jpg" },
    { country: "Finland", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752658449/Finland_wq2iab.jpg" },
    { country: "France", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752661199/France_m9ix3t.jpg" },
    { country: "Gabon", processing: "2-3", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644352/Gabon_g657vp.jpg" },
    { country: "TheGambia", processing: "3-4", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644416/The_Gambia_xjmvaj.jpg" },
    { country: "Georgia", processing: "5-7", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644350/Georgia_byx7v9.jpg" },
    { country: "Germany", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644361/Germany_qucrdx.jpg" },
    { country: "Ghana", processing: "7", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644352/Ghana_qdqcye.jpg" },
    { country: "Greece", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644353/Greece_yxfd7c.jpg" },
    { country: "Guatemala", processing: "5-6", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644355/Guatemala_gw91un.jpg" },
    { country: "Guinea", processing: "7", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752657762/Guinea_yajydk.jpg" },
    { country: "Romania", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644400/Romania_xfmr93.jpg" },
    { country: "Guyana", processing: "7-9", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644360/Guyana_dyepcf.jpg" },
    { country: "Russia", processing: "20", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752645938/Russia_d88kdg.jpg" },
    { country: "Rwanda", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752661126/Rwanda_f2mhbb.jpg" },
    { country: "HongKong", processing: "4-7 Weeks", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752658228/Hong_Kong_vhhga3.jpg" },
    { country: "Hungary", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644360/Hungary_ucglbw.jpg" },
    { country: "Iceland", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752658145/Iceland_ykgbhg.jpg" },
    { country: "Somalia", processing: "15-20", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644406/Somalia_iq7at4.jpg" },
    { country: "Indonesia", processing: "evisa/ VoA", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752657923/Indonesia_ysa2js.jpg" },
    { country: "Iran", processing: "5-6b / 7-10 T", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752657608/Iran_dkrzaa.jpg" },
    { country: "Iraq", processing: "7-15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644364/Iraq_gpgi3k.jpg" },
    { country: "Ireland", processing: "25-30", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644369/Ireland_cxsvff.jpg" },
    { country: "israel", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644370/Israel_rzg3oh.jpg" },
    { country: "Italy", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752649127/Italy_pqolcr.jpg" },
    { country: "SaudiArabia", processing: "7-10", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644403/Saudi_Arabia_gphcwd.jpg" },
    { country: "Japan", processing: "10b/ 6 T", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644369/Japan_zirprg.jpg" },
    { country: "Jordan", processing: "5-7", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752657487/Jordan_zojrw1.jpg" },
    { country: "Kazakhstan", processing: "6-7", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644370/Kazakhstan_wjw6xc.jpg" },
    { country: "Kenya", processing: "4-5", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752649189/Kenya_tv0z7z.jpg" },
    { country: "Senegal", processing: "VoA", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644402/Senegal_nidcvn.jpg" },
    { country: "SouthKorea", processing: "10-15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644411/South_Korea_fnkpm9.jpg" },
    { country: "Kuwait", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644379/Kuwait_aabdti.jpg" },
    { country: "Laos", processing: "7", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644379/Laos_exofc8.jpg" },
    { country: "Latvia", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644375/Latvia_vgsvka.jpg" },
    { country: "Lebanon", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644374/Lebanon_csdjmp.jpg" },
    { country: "Lesotho", processing: "10", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644375/Lesotho_z1uwe8.jpg" },
    { country: "Southafrica", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644413/South_Africa_ibhfnl.jpg" },
    { country: "Liechtenstein", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644377/Liechtenstein_fvam1c.jpg" },
    { country: "Lithuania", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644377/Lithuania_sehbyj.jpg" },
    { country: "Luxembourg", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644378/Luxembourg_yma74r.jpg" },
    { country: "Seychelles", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752660933/seychelles_jgxc35.jpg" },
    { country: "Madagascar", processing: "4-6", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644380/Madagascar_vfjuzh.jpg" },
    { country: "Malawi", processing: "5-7", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644382/Malawi_byjmwy.jpg" },
    { country: "Malaysia", processing: "3-7", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644384/Malaysia_qjdz4l.jpg" },
    { country: "Maldives", processing: "VoA", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752648607/Maldives_kkqzv4.jpg" },
    { country: "Mali", processing: "4-5", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644387/Mali_wdoqte.jpg" },
    { country: "Malta", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644382/Malta_agcqbc.jpg" },
    { country: "Mauritius", processing: "VoA", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644388/Mauritius_x0xqzt.jpg" },
    { country: "Mexico", processing: "4", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644384/Mexico_db33e0.jpg" },
    { country: "Moldova", processing: "15-20", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752648213/Moldova_sxzcrn.jpg" },
    { country: "Spain", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644411/Spain_q77zyi.jpg" },
    { country: "Mongolia", processing: "5", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644387/Mongolia_ypopzy.jpg" },
    { country: "Morocco", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752648421/Morocco_kxvyut.jpg" },
    { country: "Mozambique", processing: "5-6", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644393/Mozambique_xusqnd.jpg" },
    { country: "Myanmar", processing: "3", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644392/Myanmar_Burma_vxhwve.jpg" },
    { country: "Namibia", processing: "10", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644390/Namibia_d8idfw.jpg" },
    { country: "Singapore", processing: "3", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644409/Singapore_aggxir.jpg" },
    { country: "Slovakia", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752645788/Slovakia_hc7pqm.jpg" },
    { country: "Netherlands", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644395/Netherlands_vcjual.jpg" },
    { country: "NewZealand", processing: "15-20", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644390/New_Zealand_avmyeq.jpg" },
    { country: "Slovenia", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644408/Slovenia_rzttdu.jpg" },
    { country: "Nigeria", processing: "3-4 weeks", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644391/Nigeria_kh9dam.jpg" },
    { country: "Norway", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752660734/Norway_amryob.jpg" },
    { country: "Oman", processing: "10", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644394/Oman_lxzx3h.jpg" },
    { country: "SriLanka", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644410/Sri_Lanka_vagk4g.jpg" },
    { country: "Taiwan", processing: "20 N , 10 U", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644414/Taiwan_vtf2dc.jpg" },
    { country: "Tajikistan", processing: "10-15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644415/Tajikistan_ncwzxx.jpg" },
    { country: "Tanzania", processing: "7", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644418/Tanzania_xiplyo.jpg" },
    { country: "Thailand", processing: "4", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752647111/Thailand_dxqghx.jpg" },
    { country: "Togo", processing: "4-5", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752660649/Togo_cjwm7b.jpg" },
    { country: "Sudan", processing: "3", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644412/Sudan_ubqqz8.jpg" },
    { country: "Southsudan", processing: "4", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752660567/South_Sudan_s0boto.jpg" },
    { country: "Tunisia", processing: "20", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644420/Tunisia_at5zwt.jpg" },
    { country: "Turkey", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752660424/Turkey_ond2je.jpg" },
    { country: "Sweden", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644425/Sweden_qejkk5.jpg" },
    { country: "Uganda", processing: "5", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644419/Uganda_opevf4.jpg" },
    { country: "UnitedArabEmirates", processing: "4", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752645316/United_Arab_Emirates_ovotgh.jpg" },
    { country: "UnitedKingdom", processing: "3-4w N/ 5-7d P , 2d SP", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752646601/United_Kingdom_lacpae.jpg" },
    { country: "UnitedStates", processing: "AS per interview avail / U - 30-45D", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752660310/United_States_jekt5t.jpg" },
    { country: "VirginIslands", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644421/United_States_Virgin_Islands_l1d8ve.jpg" },
    { country: "Uruguay", processing: "7d", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644424/Uruguay_xczwlg.jpg" },
    { country: "Uzbekistan", processing: "3-4d", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644425/Uzbekistan_k1vgjc.jpg" },
    { country: "VaticanCity", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644425/Vatican_City_arqwg1.jpg" },
    { country: "Vietnam", processing: "5", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644427/Vietnam_i9yhos.jpg" },
    { country: "Zambia", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644425/Zambia_mxb1rj.jpg" },
    { country: "Greenland", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752644355/greenland_i7ceyh.jpg" },
  ].map(d => ({
    ...d,
    image: d.image
      ? d.image.replace("/upload/", "/upload/q_25,f_auto/")
      : d.image,
  }))

  // Helper to extract days from processing string
  function getProcessingDays(proc: string) {
    if (!proc) return 0
    // Match "3", "5-7", "3-4 weeks", "10 days", etc.
    const weekMatch = proc.match(/^(\d+)(?:-(\d+))?\s*week/i)
    const dayMatch = proc.match(/^(\d+)(?:-(\d+))?/)
    if (weekMatch) {
      return weekMatch[2] ? parseInt(weekMatch[2]) * 7 : parseInt(weekMatch[1]) * 7
    }
    if (dayMatch) {
      return dayMatch[2] ? parseInt(dayMatch[2]) : parseInt(dayMatch[1])
    }
    return 0
  }

  const filteredDestinations = destinations.filter(d => {
    const nameMatch = d.country.toLowerCase().includes(search.toLowerCase())
    const days = getProcessingDays(d.processing || "")
    if (durationFilter === "instant") {
      return nameMatch && days === 0
    }
    if (durationFilter === "week") {
      return nameMatch && days > 0 && days <= 7
    }
    if (durationFilter === "month") {
      return nameMatch && days > 7 && days <= 31
    }
    return nameMatch // "all"
  })

  return (
    <>
      <Head>
        <title>Tourist Visa Destinations | Sky Visa</title>
        <meta name="description" content="Explore tourist visa processing times and requirements for 180+ countries. Fast, secure, and reliable visa services by Sky Visa." />
        <meta name="keywords" content="tourist visa, visa destinations, visa processing, travel, vacation, Sky Visa, fast visa, secure visa, global visa, country visa" />
      </Head>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-10 bg-gradient-to-br from-sky-200 via-blue-50 to-cyan-300">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center space-y-6">
              <Badge className="bg-sky-100 text-sky-800 px-4 py-2">Tourist Visas</Badge>
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900">
                Get Your Visa on Time with{" "}
                <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-sky-600 bg-clip-text text-transparent">
                  Sky Visa 
                </span>
              </h1>
            </div>
          </div>
        </section>

          {/* Sticky Spacer */}
              <div style={{ height: isSticky ? 88 : undefined }} />

          {/* Sticky Bar with Filters First, Search Bar After */}
              <div
                ref={searchBoxRef}
                className={`w-full z-30 transition-all duration-300 ${
                  isSticky
                    ? "fixed top-0 left-0 bg-white/90 shadow-md py-4"
                    : "relative bg-white py-8"
                }`}
                style={{
                  backdropFilter: isSticky ? "blur(6px)" : undefined,
                  minHeight: 88,
                }}
              >
                <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-2 w-full max-w-6xl mx-auto px-4">
                  
                  {/* Filter Buttons */}
                  <div className="flex flex-wrap md:flex-nowrap items-center gap-2">
                    {["all", "instant", "week", "month"].map(type => (
                      <button
                        key={type}
                        type="button"
                        className={`px-4 py-2 rounded-lg border font-medium transition ${
                          durationFilter === type
                            ? "bg-sky-600 text-white border-sky-600"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-sky-50"
                        }`}
                        onClick={() => setDurationFilter(type)}
                      >
                        {type === "all"
                          ? "All"
                          : type === "instant"
                          ? "Instant"
                          : type === "week"
                          ? "In a Week"
                          : "In a Month"}
                      </button>
                    ))}
                  </div>

                  {/* Search Box */}
                  <input
                    type="text"
                    placeholder="Search country or destination..."
                    className="flex-grow max-w-xs px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                </div>
              </div>


        {/* Popular Destinations */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
              {filteredDestinations.map((destination, index) => (
                <Link
                  key={index}
                  href={`/services/tourist-visas/destination/${destination.country.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block"
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={destination.image || "/placeholder.svg"}
                        alt={destination.country}
                        width={300}
                        height={200}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-green-500 text-white">{formatProcessing(destination.processing)}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {destination.country}
                        </h3>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Get Visa by</span>
                        {(() => {
                          // Get today's date
                          const now = new Date();

                          // Extract processing time (days or weeks)
                          let daysToAdd = 0;
                          const proc = destination.processing?.toLowerCase() || "";

                          // Match patterns like "5-7", "3", "7-10", "3-4 weeks", "15", "4-6", "3-4 weeks"
                          const dayMatch = proc.match(/^(\d+)(?:-(\d+))?$/);
                          const weekMatch = proc.match(/^(\d+)(?:-(\d+))?\s*week/);

                          if (weekMatch) {
                            // If weeks, use max value if range, else single
                            daysToAdd = weekMatch[2] ? parseInt(weekMatch[2]) * 7 : parseInt(weekMatch[1]) * 7;
                          } else if (dayMatch) {
                            // If days, use max value if range, else single
                            daysToAdd = dayMatch[2] ? parseInt(dayMatch[2]) : parseInt(dayMatch[1]);
                          } else {
                            // fallback for other formats (like "VoA", "Depends", etc.)
                            daysToAdd = 7;
                          }

                          // Calculate estimated delivery date
                          const deliveryDate = new Date(now.getTime() + daysToAdd * 24 * 60 * 60 * 1000);
                          const options: Intl.DateTimeFormatOptions = { day: "2-digit", month: "long" };
                          const formatted = deliveryDate.toLocaleDateString("en-IN", options);

                          return (
                            <span className="text-lg font-bold text-blue-600 ml-2">{formatted}</span>
                          );
                        })()}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Why Choose Our Tourist Visa Service?</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold">99% Success Rate</h3>
                <p className="text-gray-600">Highest approval rate in the industry</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Fast Processing</h3>
                <p className="text-gray-600">Quick turnaround times for all destinations</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold">Secure Process</h3>
                <p className="text-gray-600">Bank-level security for your documents</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold">Global Coverage</h3>
                <p className="text-gray-600">180+ destinations worldwide</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-6 bg-gradient-to-r from-sky-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your Adventure?</h2>
            <p className="text-l mb-8 max-w-2xl mx-auto">
              Let us handle your tourist visa application while you plan the perfect vacation
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/get-started">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}
