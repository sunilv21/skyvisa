import Image from "next/image";
import Link from "next/link";
import { visaMetadataMap } from "@/lib/visaMetadata";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
  

type Props = {
  params: {
    country: string;
  };
};

// ✅ Dynamic Metadata
export function generateMetadata({ params }: Props): Metadata {
  const meta = visaMetadataMap[params.country.toLowerCase()];
  if (!meta) return { title: "Visa Services - Sky Visa" };
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://skyvisa.in/visa/${params.country}`,
      siteName: "Sky Visa",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      document_required: meta.document_required,
    },
  };
}

const destinations = [
  {
    country: "Afghanistan", processing: "3", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752663863/Afghanistan_t3urir.jpg", visaType: "Tourist Visa", validity: "30", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Algeria", processing: "4-6", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752663873/Algeria_nabxcu.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Angola", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665576/Angola_nm671h.jpg", visaType: "Tourist Visa", validity: "60", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Argentina", processing: "3", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665558/argentina_qp0dvl.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "90", entryType: "Multiple"
  },
  {
    country: "Armenia", processing: "3", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665525/Armenia_ceokvn.jpg", visaType: "Tourist Visa", validity: "180", lengthOfStay: "120", entryType: "Single"
  },
  {
    country: "Aruba", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665485/Aruba_pboyqx.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Australia", processing: "5-35", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1753108591/Australia_wjcmtl.jpg", visaType: "eVisitor/Visitor", validity: "365", lengthOfStay: "90", entryType: "Multiple"
  },
  {
    country: "Austria", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752663884/Austria_nugb3k.jpg", visaType: "Schengen Visa", validity: "180", lengthOfStay: "90", entryType: "Multiple"
  },
  {
    country: "Azerbaijan", processing: "3", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665371/Azerbaijan_jbhhig.jpg", visaType: "eVisa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Switzerland", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752663682/Switzerland_xxqyjd.jpg", visaType: "Schengen Visa", validity: "180", lengthOfStay: "90", entryType: "Multiple"
  },
  {
    country: "Bahrain", processing: "3-5", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665443/Bahrain_xtrzok.jpg", visaType: "Tourist Visa", validity: "30", lengthOfStay: "14", entryType: "Single"
  },
  {
    country: "Bangladesh", processing: "7-10", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665397/Bangladesh_fchnrt.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Panama", processing: "90", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664454/Panama_o93eo8.jpg", visaType: "Tourist Visa", validity: "180", lengthOfStay: "90", entryType: "Multiple"
  },
  {
    country: "Belarus", processing: "12", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665344/belarus_ukqgov.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Belgium", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665499/Belgium_mmafra.jpg", visaType: "Schengen Visa", validity: "180", lengthOfStay: "90", entryType: "Multiple"
  },
  {
    country: "Belize", processing: "30", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665547/belize_bihk9n.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Benin", processing: "5", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665587/Benin_wkdun4.jpg", visaType: "eVisa", validity: "30", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Papua New Guinea", processing: "4-5", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665587/Papua_New_Guinea_wkdun4.jpg", visaType: "Tourist Visa", validity: "60", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Paraguay", processing: "30", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664502/Paraguay_v2f4jn.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "90", entryType: "Single"
  },
  {
    country: "Bolivia", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665463/bolivia_qgnkiu.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "BosniaandHerzegovina", processing: "3-5", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665431/Bosnia_and_Herzegovina_k4ipe2.jpg", visaType: "Tourist Visa", validity: "180", lengthOfStay: "90", entryType: "Multiple"
  },
  {
    country: "Botswana", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665419/Botswana_z7jb1i.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Brazil", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665419/Botswana_z7jb1i.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "90", entryType: "Multiple"
  },
  {
    country: "Brunei", processing: "7-10", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665309/Brunei_guqbom.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Bulgaria", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665274/Bulgaria_bwgayq.jpg", visaType: "Schengen Visa", validity: "180", lengthOfStay: "90", entryType: "Multiple"
  },
  {
    country: "BurkinaFaso", processing: "7-70", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665320/Burkina_Faso_tnezgn.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Burundi", processing: "7", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665254/Burundi_rt2cfm.jpg", visaType: "Tourist Visa", validity: "30", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Cambodia", processing: "5", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665220/Cambodia_sstjqv.jpg", visaType: "eVisa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Peru", processing: "5-6", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664359/Peru_zgkghd.jpg", visaType: "Tourist Visa", validity: "183", lengthOfStay: "90", entryType: "Single"
  },
  {
    country: "Canada", processing: "30-60", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752663894/Canada_msjda2.jpg", visaType: "Visitor Visa", validity: "180", lengthOfStay: "180", entryType: "Multiple"
  },
  {
    country: "Chad", processing: "3-7", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665287/Chad_xx54jx.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Chile", processing: "6T/20B", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665240/Chile_szzumg.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "China", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752663905/China_w9hxld.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Colombia", processing: "20", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665263/Colombia_wckfhz.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Philippines", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664435/Philippines_rluynk.jpg", visaType: "Tourist Visa", validity: "30", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Poland", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664424/Poland_yqbbqw.jpg", visaType: "Schengen Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "RepublicofCongo", processing: "15-20", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664445/Republic_of_the_Congo_bulvdf.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "CostaRica", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665230/Costa_Rica_gjnvrl.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "CotedIvoire", processing: "7", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665547/CotedIvoire_ujqz5g.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Croatia", processing: "60", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665190/Croatia_awgyce.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Cuba", processing: "4-6", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665179/cuba_peqvh3.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Cyprus", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665120/Cyprus_rkjylw.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "CzechRepublic", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665166/Czech_Republic_w92xkv.jpg", visaType: "Schengen Visa", validity: "180", lengthOfStay: "90", entryType: "Multiple"
  },
  {
    country: "Denmark", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752663917/Denmark_m9x6qx.jpg", visaType: "Schengen Visa", validity: "180", lengthOfStay: "90", entryType: "Multiple"
  },
  {
    country: "Djibouti", processing: "5-6", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665151/Djibouti_ufpqsr.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Dominica", processing: "VoA", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664993/Dominica_w4tkja.jpg", visaType: "Tourist Visa", validity: "21", lengthOfStay: "21", entryType: "Single"
  },
  {
    country: "DominicanRepublic", processing: "Depends on embassy", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665134/Dominican_Republic_tu1gks.jpg", visaType: "Tourist Visa", validity: "30", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Ecuador", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665108/Ecuador_skyagm.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Egypt", processing: "7-10", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665043/Egypt_cz7i8e.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Portugal", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664408/Portugal_d7pc1q.jpg", visaType: "Schengen Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Qatar", processing: "5-7", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664389/Qatar_fcvhai.jpg", visaType: "Tourist Visa", validity: "30", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Estonia", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665094/estonia_ty0esd.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Ethiopia", processing: "3-4", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665082/Ethiopia_rzprjp.jpg", visaType: "eVisa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Fiji", processing: "Working days", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665069/Fiji_cuph5p.jpg", visaType: "Tourist Visa", validity: "120", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Finland", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752663928/Finland_wq2iab.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "France", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752663767/France_m9ix3t.jpg", visaType: "Schengen Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Gabon", processing: "2-3", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664981/Gabon_g657vp.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "TheGambia", processing: "3-4", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664238/The_Gambia_xjmvaj.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Georgia", processing: "5-7", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665058/Georgia_byx7v9.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Germany", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664909/Germany_qucrdx.jpg", visaType: "Schengen Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Ghana", processing: "7", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665004/Ghana_qdqcye.jpg", visaType: "Tourist Visa", validity: "30", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Greece", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664969/Greece_yxfd7c.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Guatemala", processing: "5-6", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664949/Guatemala_gw91un.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Guinea", processing: "7", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752663971/Guinea_yajydk.jpg", visaType: "eVisa", validity: "30", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Romania", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664399/Romania_xfmr93.jpg", visaType: "Schengen Visa", validity: "180", lengthOfStay: "90", entryType: "Multiple"
  },
  {
    country: "Guyana", processing: "7-9", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664921/Guyana_dyepcf.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Russia", processing: "20", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664108/Russia_d88kdg.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Rwanda", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752663778/Rwanda_f2mhbb.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "HongKong", processing: "24h pre app / 4-7 week", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752663937/Hong_Kong_vhhga3.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Hungary", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664935/Hungary_ucglbw.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Iceland", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752663946/Iceland_ykgbhg.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Somalia", processing: "15-20", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664351/Somalia_iq7at4.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Indonesia", processing: "evisa/ VoA", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752663960/Indonesia_ysa2js.jpg", visaType: "Tourist Visa", validity: "30", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Iran", processing: "5", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752663982/Iran_dkrzaa.jpg", visaType: "Tourist Visa", validity: "30", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Iraq", processing: "7-15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664895/Iraq_gpgi3k.jpg", visaType: "Tourist Visa", validity: "30", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Ireland", processing: "25-30", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664871/Ireland_cxsvff.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "israel", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664861/Israel_rzg3oh.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Italy", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664015/Italy_pqolcr.jpg", visaType: "Schengen Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "SaudiArabia", processing: "7-10", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664369/Saudi_Arabia_gphcwd.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Japan", processing: "10b/ 6 T", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664881/Japan_zirprg.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Jordan", processing: "5-7", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752663993/Jordan_zojrw1.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Kazakhstan", processing: "6-7", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664845/Kazakhstan_wjw6xc.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Kenya", processing: "4-5", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664005/Kenya_tv0z7z.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Senegal", processing: "VoA", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664378/Senegal_nidcvn.jpg", visaType: "Tourist Visa", validity: "30", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "SouthKorea", processing: "10-15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664313/South_Korea_fnkpm9.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Kuwait", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664680/Kuwait_aabdti.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Laos", processing: "7", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664670/Laos_exofc8.jpg", visaType: "Tourist Visa", validity: "30", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Latvia", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664805/Latvia_vgsvka.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Lebanon", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664835/Lebanon_csdjmp.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Lesotho", processing: "10", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664820/Lesotho_z1uwe8.jpg", visaType: "Tourist Visa", validity: "30", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Southafrica", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664283/South_Africa_ibhfnl.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Liechtenstein", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664737/Liechtenstein_fvam1c.jpg", visaType: "Schengen Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Lithuania", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664778/Lithuania_sehbyj.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Luxembourg", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664689/Luxembourg_yma74r.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Seychelles", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752663789/seychelles_jgxc35.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Madagascar", processing: "4-6", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664658/Madagascar_vfjuzh.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Malawi", processing: "5-7", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664635/Malawi_byjmwy.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Malaysia", processing: "3-7", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664615/Malaysia_qjdz4l.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Maldives", processing: "VoA", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664027/Maldives_kkqzv4.jpg", visaType: "Tourist Visa", validity: "30", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Mali", processing: "4-5", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664594/Mali_wdoqte.jpg", visaType: "eVisa", validity: "30", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Malta", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664647/Malta_agcqbc.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Mauritius", processing: "VoA", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664584/Mauritius_x0xqzt.jpg", visaType: "Tourist Visa", validity: "60", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Mexico", processing: "4", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664624/Mexico_db33e0.jpg", visaType: "Tourist Visa", validity: "180", lengthOfStay: "90", entryType: "Multiple"
  },
  {
    country: "Moldova", processing: "15-20", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664048/Moldova_sxzcrn.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Spain", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664303/Spain_q77zyi.jpg", visaType: "Schengen Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Mongolia", processing: "5", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664604/Mongolia_ypopzy.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Morocco", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665547/Morocco_ujqz5g.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Mozambique", processing: "5-6", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664038/Morocco_kxvyut.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Myanmar", processing: "3", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664523/Myanmar_Burma_vxhwve.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Namibia", processing: "10", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664563/Namibia_d8idfw.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Singapore", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664330/Singapore_aggxir.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Slovakia", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664117/Slovakia_hc7pqm.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Netherlands", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664468/Netherlands_vcjual.jpg", visaType: "Schengen Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "NewZealand", processing: "15-20", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664574/New_Zealand_avmyeq.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Slovenia", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664342/Slovenia_rzttdu.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Niger", processing: "30-40", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664539/Niger_vbsk2o.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Nigeria", processing: "3-4 weeks", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664551/Nigeria_kh9dam.jpg", visaType: "Tourist Visa", validity: "30", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Norway", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752663800/Norway_amryob.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Oman", processing: "10", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664478/Oman_lxzx3h.jpg", visaType: "Tourist Visa", validity: "30", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Srilanka", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664322/Sri_Lanka_vagk4g.jpg", visaType: "Tourist Visa", validity: "30", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Taiwan", processing: "20 N , 10 U", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664264/Taiwan_vtf2dc.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Tajikistan", processing: "10-15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664252/Tajikistan_ncwzxx.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Tanzania", processing: "7", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664230/Tanzania_xiplyo.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Thailand", processing: "4", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664061/Thailand_dxqghx.jpg", visaType: "Tourist Visa", validity: "30", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Togo", processing: "4-5", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752663816/Togo_cjwm7b.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Sudan", processing: "3", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664293/Sudan_ubqqz8.jpg", visaType: "Tourist Visa", validity: "30", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "SouthSudan", processing: "4", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752663826/South_Sudan_s0boto.jpg", visaType: "Tourist Visa", validity: "30", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Tunisia", processing: "20", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664209/Tunisia_at5zwt.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Turkey", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752663837/Turkey_ond2je.jpg", visaType: "Schengen Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Sweden", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664169/Sweden_qejkk5.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Uganda", processing: "5", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664220/Uganda_opevf4.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "UnitedArabEmirates", processing: "4", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664128/United_Arab_Emirates_ovotgh.jpg", visaType: "Tourist Visa", validity: "30", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "UnitedKingdom", processing: "28 Days", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664097/United_Kingdom_lacpae.jpg", visaType: "Tourist Visa", validity: "180", lengthOfStay: "180", entryType: "Multiple"
  },
  {
    country: "UnitedStates", processing: "AS per interview avail", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752663850/United_States_jekt5t.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "VirginIslands", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664200/United_States_Virgin_Islands_l1d8ve.jpg", visaType: "Tourist Visa", validity: "30", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Uruguay", processing: "7d", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664189/Uruguay_xczwlg.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Uzbekistan", processing: "3-4d", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664147/Uzbekistan_k1vgjc.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "VaticanCity", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664179/Vatican_City_arqwg1.jpg", visaType: "Tourist Visa", validity: "30", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Vietnam", processing: "5", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664137/Vietnam_i9yhos.jpg", visaType: "Tourist Visa", validity: "30", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Zambia", processing: "", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664158/Zambia_mxb1rj.jpg", visaType: "Tourist Visa", validity: "30", lengthOfStay: "30", entryType: "Single"
  },
  {
    country: "Greenland", processing: "15", image: "https://res.cloudinary.com/dtifkfdmk/image/upload/v1752664958/greenland_i7ceyh.jpg", visaType: "Tourist Visa", validity: "90", lengthOfStay: "30", entryType: "Single"
  },
];

export default function DestinationPage({ params }: Props) {
  const countryParam = params.country;
  const destination = destinations.find(
    d => d.country.toLowerCase().replace(/\s+/g, "-") === countryParam
  );
  const meta = visaMetadataMap[countryParam.toLowerCase()];

  if (!destination || !meta) {
    return <div className="p-10 text-center">Destination not found.</div>;
  }

  return (
    <div className="min-h-screen py-10 px-2 md:px-0 flex flex-col items-center bg-white">
      
      {/* Metadata Title & Description */}
      <div className="w-full max-w-4xl mx-auto mb-8">
        <Image
          src={destination.image || "/placeholder.svg"}
          alt={destination.country}
          width={1500} // Increased width
          height={500} // Increased height
          className="w-full h-[350px] md:h-[450px] object-cover rounded-2xl shadow-lg" // Increased height for larger screens
          priority
        />
      </div>
    {/* Visa Info Row */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-[#F4F7FE] px-4 py-2 rounded-lg">
              <span className="text-[#4300FF] font-semibold">Visa Type:</span>
              <span className="font-bold text-[#222]">{destination.visaType || "N/A"}</span>
            </div>
            <div className="flex items-center gap-2 bg-[#F4F7FE] px-4 py-2 rounded-lg">
              <span className="text-[#4300FF] font-semibold">Length of Stay:</span>
              <span className="font-bold text-[#222]">up to {destination.lengthOfStay || "N/A"} Days</span>
            </div>
            <div className="flex items-center gap-2 bg-[#F4F7FE] px-4 py-2 rounded-lg">
              <span className="text-[#4300FF] font-semibold">Type:</span>
              <span className="font-bold text-[#222]">Short-term</span>
            </div>
            <div className="flex items-center gap-2 bg-[#F4F7FE] px-4 py-2 rounded-lg">
              <span className="text-[#4300FF] font-semibold">Entry:</span>
              <span className="font-bold text-[#222]">{destination.entryType || "N/A"}</span>
            </div>
          </div>

      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          {/* Title from metadata */}
          <h1 className="text-4xl font-bold mb-4 mt-2 text-[#222]">
            {meta.title}
          </h1>
          {/* Description from metadata */}
          <div className="text-lg text-gray-700 mb-8 font-semibold">
            {meta.description}
          </div>
          {/* Documents Required */}
          <h2 className="text-xl font-bold mb-4 text-[#222]">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-800 text-base space-y-2 mb-8">
            {meta.document_required.split(",").map((doc, index) => (
              <li key={index}>{doc.trim()}</li>
            ))}
          </ul>
          
          {/* Divider */}
          <hr className="my-8 border-gray-200" />
          {/* Appointment Availability */}
          <h2 className="text-xl font-bold mb-4 text-[#222]">Check Appointment availability</h2>
          <div className="bg-[#F8FAFF] rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center gap-8">
            <div>
              {/* Calculate earliest appointment date and days based on processing time */}
              {(() => {
                let days = 5;
                let processing = destination.processing || "";
                const match = processing.match(/(\d+)/);
                if (match) {
                  days = parseInt(match[1], 10);
                }
                const today = new Date();
                const appointmentDate = new Date(today);
                appointmentDate.setDate(today.getDate() + days);
                const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "short", year: "numeric" };
                const formattedDate = appointmentDate.toLocaleDateString("en-GB", options);

                return (
                  <>
                    <div className="text-gray-600 mb-2">
                      Visa Appointment as Early as <span className="text-[#4300FF] font-bold">{formattedDate}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold">Appointment Location</span>
                      <select className="border rounded px-2 py-1 text-sm">
                        <option>Ahmedabad</option>
                        <option>Mumbai</option>
                        <option>Delhi</option>
                        <option>Bangalore</option>
                      </select>
                    </div>
                    <div className="text-gray-500 text-sm">{days} Days until nearest available appointment</div>
                  </>
                );
              })()}
            </div>
            <div className="flex-1 flex justify-center">
              {(() => {
                let days = 5;
                let processing = destination.processing || "";
                const match = processing.match(/(\d+)/);
                if (match) {
                  days = parseInt(match[1], 10);
                }
                return (
                  <div className="w-32 h-32 rounded-full border-4 border-[#4300FF] flex items-center justify-center text-2xl font-bold text-[#4300FF] bg-white">
                    {days} Days
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <div className="w-full md:w-[350px] flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-lg border border-[#E0E7FF] p-6 mb-4">
            <div className="bg-[#5B5BFF] text-white rounded-xl px-4 py-2 mb-4 font-semibold text-center">
              Get your visa by <span className="font-bold">24th Jul 2025, 05:30 AM</span>
            </div>
            <Link href="/get-started" passHref>
              <button className="w-full bg-[#0065F8] hover:bg-[#4300FF] text-white font-bold py-3 rounded-xl transition mb-2 mt-6">
                Get Your Visa
              </button>
            </Link>
          </div>
          <Link href="/contact" passHref>
            <button className="w-full mt-4 bg-white border border-[#222] text-[#222] font-semibold py-2 rounded-xl hover:bg-[#F0F8FF] transition flex items-center justify-center gap-2">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#222"/></svg>
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}