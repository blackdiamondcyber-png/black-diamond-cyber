#!/bin/bash
# One-shot: generate AI placeholder images for all demo sites via Pollinations.ai (Flux-1).
# Downloads to public/images/ai/{filename}.jpg for ownership + speed.
# Run once, then delete or keep for future re-rolls.

set -e
cd "$(dirname "$0")/.."
mkdir -p public/images/ai

BASE="https://image.pollinations.ai/prompt"
# Shared style suffix for consistency across all 15 images.
STYLE="cinematic%20photorealistic%20Canon%20EOS%20R5%20editorial%20photography%20natural%20light%20shallow%20depth%20of%20field%20premium%20brand%20imagery%20high%20detail%208k"

# Pollinations params: nologo=true strips watermark; model=flux picks Flux-1 dev; seed for determinism.
P_W_PORTRAIT="width=1200&height=1500"  # 4:5 portrait
P_W_LANDSCAPE="width=1920&height=1280" # 3:2 landscape
P_W_SQUARE="width=1200&height=1200"    # 1:1
COMMON="model=flux&nologo=true&enhance=true"

# Usage: gen <filename> <dimensions-param-var> <seed> <url-encoded-prompt>
gen() {
  local name="$1"
  local dims="$2"
  local seed="$3"
  local prompt="$4"
  local out="public/images/ai/${name}.jpg"
  local url="${BASE}/${prompt}%20${STYLE}?${dims}&${COMMON}&seed=${seed}"
  echo "[gen] ${name}"
  # -L follow redirects; -f fail on 4xx/5xx; retries in case of brief 502s from the Flux backend
  curl -fLs --retry 3 --retry-delay 2 --max-time 180 -o "${out}.tmp" "${url}" \
    && mv "${out}.tmp" "${out}" \
    && printf "       %s bytes -> %s\n" "$(wc -c < "${out}" | tr -d ' ')" "${out}" \
    || { echo "       FAILED (network or backend); leaving any previous file in place"; rm -f "${out}.tmp"; return 1; }
}

# ===================== DENTAL =====================
gen dental-reception "$P_W_LANDSCAPE" 101 \
  "modern%20luxury%20dental%20office%20reception%20desk%20sleek%20white%20and%20warm%20wood%20tones%20polished%20floors%20friendly%20receptionist%20welcoming%20a%20patient%20soft%20morning%20light%20through%20large%20windows"

gen dental-dentist-male "$P_W_PORTRAIT" 102 \
  "professional%20male%20dentist%20in%20navy%20blue%20scrubs%20warm%20confident%20smile%20modern%20dental%20clinic%20softly%20blurred%20background%20natural%20window%20light%20clean%20editorial%20portrait"

gen dental-dentist-female "$P_W_PORTRAIT" 103 \
  "professional%20female%20dentist%20in%20white%20coat%20kind%20welcoming%20smile%20modern%20dental%20office%20softly%20blurred%20behind%20natural%20light%20editorial%20portrait%20warm%20tones"

gen dental-team "$P_W_LANDSCAPE" 104 \
  "diverse%20dental%20practice%20team%20of%20five%20professionals%20smiling%20wearing%20matching%20navy%20scrubs%20and%20white%20coats%20modern%20clinic%20background%20natural%20light%20group%20portrait%20confident"

gen dental-patient-happy "$P_W_PORTRAIT" 105 \
  "happy%20satisfied%20woman%20patient%20smiling%20after%20dental%20visit%20warm%20genuine%20expression%20soft%20blurred%20dental%20office%20background%20natural%20window%20light%20editorial%20portrait"

gen dental-exam-room "$P_W_LANDSCAPE" 106 \
  "ultra-modern%20dental%20examination%20room%20ergonomic%20blue%20chair%20natural%20light%20through%20large%20windows%20clean%20minimalist%20design%20architectural%20interior%20photography%20warm%20premium%20feel"

# ===================== HVAC =====================
gen hvac-technician "$P_W_PORTRAIT" 201 \
  "professional%20HVAC%20technician%20in%20navy%20uniform%20with%20tool%20belt%20friendly%20confident%20smile%20service%20van%20softly%20blurred%20behind%20golden%20hour%20natural%20light%20editorial%20portrait"

gen hvac-team-truck "$P_W_LANDSCAPE" 202 \
  "professional%20HVAC%20team%20of%20four%20technicians%20standing%20in%20front%20of%20clean%20white%20service%20truck%20in%20suburban%20driveway%20blue%20sky%20confident%20smiles%20editorial%20group%20portrait"

gen hvac-handshake "$P_W_LANDSCAPE" 203 \
  "HVAC%20technician%20shaking%20hands%20with%20happy%20homeowner%20in%20modern%20home%20foyer%20warm%20natural%20light%20editorial%20photography%20trust%20and%20service"

gen hvac-before-after "$P_W_LANDSCAPE" 204 \
  "split%20composition%20before%20and%20after%20HVAC%20installation%20left%20side%20old%20rusty%20unit%20in%20utility%20room%20right%20side%20sleek%20modern%20new%20system%20professionally%20installed%20wide%20angle%20comparison"

# ===================== MEDSPA =====================
gen medspa-aesthetician "$P_W_PORTRAIT" 301 \
  "elegant%20female%20aesthetician%20in%20white%20coat%20in%20luxury%20medspa%20treatment%20room%20soft%20rose%20gold%20accents%20natural%20light%20calm%20professional%20smile%20editorial%20portrait%20premium%20wellness"

gen medspa-botox "$P_W_PORTRAIT" 302 \
  "luxury%20medspa%20treatment%20consultation%20elegant%20woman%20receiving%20gentle%20facial%20assessment%20by%20gloved%20aesthetician%20serene%20treatment%20room%20soft%20blush%20and%20white%20palette%20natural%20light"

# ===================== PLUMBING =====================
gen plumbing-technician "$P_W_PORTRAIT" 401 \
  "professional%20plumber%20in%20clean%20uniform%20with%20wrench%20confident%20friendly%20smile%20bright%20modern%20bathroom%20softly%20blurred%20background%20editorial%20portrait%20trustworthy%20service"

gen plumbing-greeting "$P_W_LANDSCAPE" 402 \
  "plumber%20in%20uniform%20greeting%20happy%20homeowner%20at%20front%20door%20of%20suburban%20home%20handshake%20gesture%20warm%20golden%20hour%20light%20editorial%20photography"

gen plumbing-bathroom "$P_W_LANDSCAPE" 403 \
  "luxurious%20renovated%20master%20bathroom%20with%20freestanding%20bathtub%20marble%20vanity%20rainfall%20shower%20warm%20neutral%20palette%20natural%20light%20architectural%20interior%20photography%20premium%20renovation"

echo ""
echo "=== Summary ==="
ls -l public/images/ai/ | awk 'NR>1 { total += $5; print $5"  "$NF } END { print "--- "total" bytes total ---" }'
