"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"  // ✅ Add this line
import { Search } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"


export default function QuickVisaSearch() {
  const [toCountry, setToCountry] = useState("")
  const router = useRouter()

  return (
    <section
      className="py-16 relative"
      style={{
        background: "linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 50%, #bae6fd 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Background image */}
      <img
        src="/images/quick-visa-search.jpg"
        alt="Visa background"
        className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none select-none"
        style={{ zIndex: 0 }}
      />
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <Card
  className="max-w-5xl mx-auto shadow-2xl border-0 bg-white/20 backdrop-blur-mx"
  style={{
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
    borderRadius: "1.5rem",
    border: "1px solid rgba(255,255,255,0.25)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
  }}
>
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-sky-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Find Your Visa Requirements
            </CardTitle>
            <CardDescription className="text-lg text-gray-800">
              Select your destination and get instant visa information with processing time
            </CardDescription>
          </CardHeader>
          <CardContent>
           <div className="grid md:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">From Country</label>
                    <select className="w-full h-12 px-4 border-2 border-input rounded-lg focus:border-sky-500 focus:outline-none">
                      <option value="">Select your country</option>
                      <optgroup label="Popular Countries">
                        <option value="us">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="ca">Canada</option>
                        <option value="au">Australia</option>
                        <option value="in">India</option>
                        <option value="cn">China</option>
                        <option value="jp">Japan</option>
                        <option value="de">Germany</option>
                        <option value="fr">France</option>
                        <option value="ae">United Arab Emirates</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">To Country</label>
                    <select
      className="w-full h-12 px-4 border-2 border-input rounded-lg focus:border-sky-500 focus:outline-none"
      value={toCountry}
      onChange={e => setToCountry(e.target.value)}
    >
                      <option value="">Destination country</option>
                      <optgroup label="Popular Destinations">
                        <option value="us">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="schengen">Schengen Area (EU)</option>
                        <option value="ca">Canada</option>
                        <option value="au">Australia</option>
                        <option value="jp">Japan</option>
                        <option value="sg">Singapore</option>
                        <option value="ae">United Arab Emirates</option>
                        <option value="nz">New Zealand</option>
                        <option value="ch">Switzerland</option>
                      </optgroup>
                      <optgroup label="All Countries">
                        <option value="af">Afghanistan</option>
    <option value="al">Albania</option>
    <option value="dz">Algeria</option>
    <option value="ad">Andorra</option>
    <option value="ao">Angola</option>
    <option value="ag">Antigua and Barbuda</option>
    <option value="ar">Argentina</option>
    <option value="am">Armenia</option>
    <option value="au">Australia</option>
    <option value="at">Austria</option>
    <option value="az">Azerbaijan</option>
    <option value="bs">Bahamas</option>
    <option value="bh">Bahrain</option>
    <option value="bd">Bangladesh</option>
    <option value="bb">Barbados</option>
    <option value="by">Belarus</option>
    <option value="be">Belgium</option>
    <option value="bz">Belize</option>
    <option value="bj">Benin</option>
    <option value="bt">Bhutan</option>
    <option value="bo">Bolivia</option>
    <option value="ba">Bosnia and Herzegovina</option>
    <option value="bw">Botswana</option>
    <option value="br">Brazil</option>
    <option value="bn">Brunei</option>
    <option value="bg">Bulgaria</option>
    <option value="bf">Burkina Faso</option>
    <option value="bi">Burundi</option>
    <option value="kh">Cambodia</option>
    <option value="cm">Cameroon</option>
    <option value="ca">Canada</option>
    <option value="cv">Cape Verde</option>
    <option value="cf">Central African Republic</option>
    <option value="td">Chad</option>
    <option value="cl">Chile</option>
    <option value="cn">China</option>
    <option value="co">Colombia</option>
    <option value="km">Comoros</option>
    <option value="cg">Congo</option>
    <option value="cd">Congo (DRC)</option>
    <option value="cr">Costa Rica</option>
    <option value="ci">Côte d’Ivoire</option>
    <option value="hr">Croatia</option>
    <option value="cu">Cuba</option>
    <option value="cy">Cyprus</option>
    <option value="cz">Czech Republic</option>
    <option value="dk">Denmark</option>
    <option value="dj">Djibouti</option>
    <option value="dm">Dominica</option>
    <option value="do">Dominican Republic</option>
    <option value="ec">Ecuador</option>
    <option value="eg">Egypt</option>
    <option value="sv">El Salvador</option>
    <option value="gq">Equatorial Guinea</option>
    <option value="er">Eritrea</option>
    <option value="ee">Estonia</option>
    <option value="sz">Eswatini</option>
    <option value="et">Ethiopia</option>
    <option value="fj">Fiji</option>
    <option value="fi">Finland</option>
    <option value="fr">France</option>
    <option value="ga">Gabon</option>
    <option value="gm">Gambia</option>
    <option value="ge">Georgia</option>
    <option value="de">Germany</option>
    <option value="gh">Ghana</option>
    <option value="gr">Greece</option>
    <option value="gd">Grenada</option>
    <option value="gt">Guatemala</option>
    <option value="gn">Guinea</option>
    <option value="gw">Guinea-Bissau</option>
    <option value="gy">Guyana</option>
    <option value="ht">Haiti</option>
    <option value="hn">Honduras</option>
    <option value="hu">Hungary</option>
    <option value="is">Iceland</option>
    <option value="in">India</option>
    <option value="id">Indonesia</option>
    <option value="ir">Iran</option>
    <option value="iq">Iraq</option>
    <option value="ie">Ireland</option>
    <option value="il">Israel</option>
    <option value="it">Italy</option>
    <option value="jm">Jamaica</option>
    <option value="jp">Japan</option>
    <option value="jo">Jordan</option>
    <option value="kz">Kazakhstan</option>
    <option value="ke">Kenya</option>
    <option value="ki">Kiribati</option>
    <option value="kp">Korea, North</option>
    <option value="kr">Korea, South</option>
    <option value="kw">Kuwait</option>
    <option value="kg">Kyrgyzstan</option>
    <option value="la">Laos</option>
    <option value="lv">Latvia</option>
    <option value="lb">Lebanon</option>
    <option value="ls">Lesotho</option>
    <option value="lr">Liberia</option>
    <option value="ly">Libya</option>
    <option value="li">Liechtenstein</option>
    <option value="lt">Lithuania</option>
    <option value="lu">Luxembourg</option>
    <option value="mg">Madagascar</option>
    <option value="mw">Malawi</option>
    <option value="my">Malaysia</option>
    <option value="mv">Maldives</option>
    <option value="ml">Mali</option>
    <option value="mt">Malta</option>
    <option value="mh">Marshall Islands</option>
    <option value="mr">Mauritania</option>
    <option value="mu">Mauritius</option>
    <option value="mx">Mexico</option>
    <option value="fm">Micronesia</option>
    <option value="md">Moldova</option>
    <option value="mc">Monaco</option>
    <option value="mn">Mongolia</option>
    <option value="me">Montenegro</option>
    <option value="ma">Morocco</option>
    <option value="mz">Mozambique</option>
    <option value="mm">Myanmar (Burma)</option>
    <option value="na">Namibia</option>
    <option value="nr">Nauru</option>
    <option value="np">Nepal</option>
    <option value="nl">Netherlands</option>
    <option value="nz">New Zealand</option>
    <option value="ni">Nicaragua</option>
    <option value="ne">Niger</option>
    <option value="ng">Nigeria</option>
    <option value="mk">North Macedonia</option>
    <option value="no">Norway</option>
    <option value="om">Oman</option>
    <option value="pk">Pakistan</option>
    <option value="pw">Palau</option>
    <option value="ps">Palestine</option>
    <option value="pa">Panama</option>
    <option value="pg">Papua New Guinea</option>
    <option value="py">Paraguay</option>
    <option value="pe">Peru</option>
    <option value="ph">Philippines</option>
    <option value="pl">Poland</option>
    <option value="pt">Portugal</option>
    <option value="qa">Qatar</option>
    <option value="ro">Romania</option>
    <option value="ru">Russia</option>
    <option value="rw">Rwanda</option>
    <option value="kn">Saint Kitts and Nevis</option>
    <option value="lc">Saint Lucia</option>
    <option value="vc">Saint Vincent and the Grenadines</option>
    <option value="ws">Samoa</option>
    <option value="sm">San Marino</option>
    <option value="st">Sao Tome and Principe</option>
    <option value="sa">Saudi Arabia</option>
    <option value="sn">Senegal</option>
    <option value="rs">Serbia</option>
    <option value="sc">Seychelles</option>
    <option value="sl">Sierra Leone</option>
    <option value="sg">Singapore</option>
    <option value="sk">Slovakia</option>
    <option value="si">Slovenia</option>
    <option value="sb">Solomon Islands</option>
    <option value="so">Somalia</option>
    <option value="za">South Africa</option>
    <option value="ss">South Sudan</option>
    <option value="es">Spain</option>
    <option value="lk">Sri Lanka</option>
    <option value="sd">Sudan</option>
    <option value="sr">Suriname</option>
    <option value="se">Sweden</option>
    <option value="ch">Switzerland</option>
    <option value="sy">Syria</option>
    <option value="tw">Taiwan</option>
    <option value="tj">Tajikistan</option>
    <option value="tz">Tanzania</option>
    <option value="th">Thailand</option>
    <option value="tl">Timor-Leste</option>
    <option value="tg">Togo</option>
    <option value="to">Tonga</option>
    <option value="tt">Trinidad and Tobago</option>
    <option value="tn">Tunisia</option>
    <option value="tr">Turkey</option>
    <option value="tm">Turkmenistan</option>
    <option value="tv">Tuvalu</option>
    <option value="ug">Uganda</option>
    <option value="ua">Ukraine</option>
    <option value="ae">United Arab Emirates</option>
    <option value="gb">United Kingdom</option>
    <option value="us">United States</option>
    <option value="uy">Uruguay</option>
    <option value="uz">Uzbekistan</option>
    <option value="vu">Vanuatu</option>
    <option value="va">Vatican City</option>
    <option value="ve">Venezuela</option>
    <option value="vn">Vietnam</option>
    <option value="ye">Yemen</option>
    <option value="zm">Zambia</option>
    <option value="zw">Zimbabwe</option>
  </optgroup>
</select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Travel Purpose</label>
                    <select className="w-full h-12 px-4 border-2 border-input rounded-lg focus:border-sky-500 focus:outline-none">
                      <option value="">Select purpose</option>
                      <optgroup label="Tourism & Leisure">
                        <option value="tourist">Tourism/Vacation</option>
                        <option value="leisure">Leisure Travel</option>
                        <option value="sightseeing">Sightseeing</option>
                        <option value="holiday">Holiday/Recreation</option>
                        <option value="cultural">Cultural Visit</option>
                        <option value="religious">Religious/Pilgrimage</option>
                        <option value="adventure">Adventure Tourism</option>
                        <option value="wellness">Wellness/Spa Tourism</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Travel Date</label>
                    <Input type="date" className="h-12 border-2 focus:border-sky-500" />
                  </div>
                </div>
                <Button
      className="w-full mt-8 h-14 text-lg bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      onClick={() => {
        if (toCountry) {
          router.push(`/visa-requirements?country=${toCountry}`)
        }
      }}
    >
                  <Search className="mr-3 h-5 w-5" />
                  Check Visa Requirements
                </Button>
                
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

