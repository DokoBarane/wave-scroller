import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Definitions, Incoterms & Terms | Vyom Global Logistics" },
      {
        name: "description",
        content:
          "Shipping definitions, Incoterms guidance and the terms and conditions that govern Vyom Global Logistics sea freight and tanktainer services.",
      },
      {
        property: "og:title",
        content: "Resources — Definitions, Incoterms & Terms | Vyom Global Logistics",
      },
      {
        property: "og:description",
        content:
          "Reference material for Vyom customers: freight definitions, Incoterms and standard trading terms and conditions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResourcesPage,
});

const TAB_CLASS =
  "rounded-lg px-4 py-2 text-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-soft";

function ResourcePanel({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gradient-brand">
        {label}
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h1>
      <div className="mt-8 rounded-2xl border border-border bg-card px-6 py-16 text-center shadow-soft">
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </>
  );
}

const DEFINITIONS: { number: string; term: string; description: string }[] = [
  {
    number: "1.1",
    term: "Carriage",
    description:
      "Carriage means the whole or any part of the carriage, loading, unloading, storing, warehousing, handling and any and all other services whatsoever undertaken by the Carrier in relation to the Goods.",
  },
  {
    number: "1.2",
    term: "Carrier",
    description:
      "A carrier is responsible for transporting the freight from one place to another. Vyom Global Logistics (S) Pte Ltd is a Carrier.",
  },
  {
    number: "1.3",
    term: "Container",
    description:
      "Includes any container (including an open top container), flat rack, platform, trailer, transportable tank, pallet, or any other similar article used to consolidate the Goods and any connected equipment.",
  },
  {
    number: "1.4",
    term: "Freight",
    description:
      "Includes all charges payable to the carrier in accordance with the applicable Tariff and the bill of lading.",
  },
  {
    number: "1.5",
    term: "Goods",
    description:
      "Means the whole or any part of the cargo and any packaging accepted from the Shipper and includes any Container not supplied by or on behalf of the Carrier.",
  },
  {
    number: "1.6",
    term: "Hague Rules",
    description:
      "Means the provisions of the International Convention for the Unification of Certain Rules relating to Bills of Lading signed at Brussels on 25th August 1924 and includes the amendments by the Protocol signed at Brussels on 23rd February 1968, but only if such amendments are compulsorily applicable to the bill of lading. (It is expressly provided that nothing in the bill of lading shall be construed as contractually applying the said Rules as amended by said Protocol).",
  },
  {
    number: "1.7",
    term: "Holder",
    description:
      "Means any Person for the time being in possession of the bill of lading to or in whose rights of suit and or liability under the bill of lading have been transferred or vested.",
  },
  {
    number: "1.9",
    term: "Merchant",
    description:
      "Includes the Shipper, Holder, Consignee, Receiver of the Goods, any Person owning or entitled to the possession of the Goods or of the bill of lading and anyone acting on behalf of such Person.",
  },
  {
    number: "1.10",
    term: "Multimodal Transport",
    description:
      "Arises if the Place of Receipt and/or the Place of Delivery are indicated on the reverse hereof in the relevant spaces.",
  },
  {
    number: "1.11",
    term: "Ocean Transport",
    description: "Means the same as Port-to-Port Shipment.",
  },
  {
    number: "1.12",
    term: "Package",
    description:
      "Where a Container is loaded with more than one package or unit, the packages or other shipping units enumerated on the reverse hereof as packed in such Container and entered in the box on the reverse hereof entitled “Carrier’s”.",
  },
  {
    number: "1.13",
    term: "Receipt",
    description: "Are each deemed a Package.",
  },
  {
    number: "1.14",
    term: "Person",
    description: "Includes an individual, corporation, or other legal entity.",
  },
  {
    number: "1.15",
    term: "Port-to-Port Shipment",
    description: "Arises when the Carriage is not Multimodal.",
  },
  {
    number: "1.16",
    term: "Subcontractor",
    description:
      "Includes owners, charterers, and operators of vessels (other than the Carrier), stevedores, terminal and groupage operators, road and rail transport operators, warehousemen and any independent contractors employed by the Carrier performing the Carriage and any direct or indirect Subcontractors, servants, and agents thereof whether in direct contractual privity or not.",
  },
  {
    number: "1.17",
    term: "Terms and Conditions",
    description:
      "Means all terms, rights, defenses, provisions, conditions, exceptions, limitations, and liberties hereof.",
  },
  {
    number: "1.18",
    term: "US COGSA™",
    description:
      "Means the US Carriage of Goods by Sea Act 1936. “Vessel” means any water borne craft used in the carriage under the Bill of Lading which may be a feeder vessel or an ocean vessel.",
  },
];

function DefinitionsPanel() {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gradient-brand">
        Resources
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Definitions
      </h1>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
        Terminology used across Vyom Global Logistics bills of lading and
        service documentation.
      </p>
      <dl className="mt-8 grid gap-4 lg:grid-cols-2">
        {DEFINITIONS.map((item) => (
          <div
            key={item.number}
            className="rounded-2xl border border-border bg-card p-6 shadow-soft"
          >
            <dt className="flex flex-wrap items-baseline gap-2">
              <span className="text-xs font-semibold tracking-[0.12em] text-gradient-brand">
                {item.number}
              </span>
              <span className="text-base font-semibold text-foreground">
                {item.term}
              </span>
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
}

const INCOTERMS_ANY_MODE = [
  {
    term: "Ex works",
    description:
      "The shipper’s goods are placed at the disposal of the buyer within the shipper’s premises or any other place. The shipper’s responsibility is minimum, and the buyer is responsible for loading and for all the other export-related formalities.",
  },
  {
    term: "FCA",
    description:
      "Free Carrier – The shipper’s responsibility includes completing all export clearance formalities and making the goods available to the carrier.",
  },
  {
    term: "DAP",
    description:
      "Delivered at Place – The shipper has to assume all the risks involved up to unloading of goods.",
  },
  {
    term: "DDP",
    description:
      "Delivered Duty Paid – As the name of the term suggests the shipper is responsible for all the expenses and risks involved in making the goods available at the final destination. The duty and taxes have to be borne by the shipper.",
  },
  {
    term: "DPU",
    description:
      "Delivered at Place Unloaded – Means that the shipper has to clear goods for export, where applicable, without any obligation to clear the goods for import, pay import duty or carry out import customs formalities.",
  },
  {
    term: "CIP",
    description:
      "Carriage and Insurance Paid – Means that the shipper is responsible for arranging and paying the carriage charges and insurance. Carriage charges are paid up to the named place.",
  },
  {
    term: "CPT",
    description:
      "Carriage Paid To – As the name suggests only the carriage charges are borne by the shipper and the shipper does not have to cover insurance.",
  },
];

const INCOTERMS_OCEAN = [
  {
    term: "FAS",
    description:
      "Free Alongside Ship – Shipper has direct access to the vessel for loading. This is usually for bulk cargo vessels.",
  },
  {
    term: "FCA",
    description:
      "Free Carrier – Shipper has to bear transportation costs and assume all risks until the carrier receives the goods, after which the buyer has to bear all responsibility.",
  },
  {
    term: "FOB",
    description:
      "Free On Board – Shipper delivers the goods aboard the vessel nominated by the consignee. Shipper is responsible for all costs up to that point.",
  },
  {
    term: "CFR",
    description:
      "Cost and Freight – Shipper is responsible for the cost, freight, and delivery of the goods to the port specified by the consignee.",
  },
  {
    term: "CIF",
    description:
      "Cost, Insurance and Freight – Same as above except the shipper also has to bear the insurance as well.",
  },
];

function IncotermsPanel() {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gradient-brand">
        Resources
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Incoterms
      </h1>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
        The Incoterms® rules are published by the International Chamber of
        Commerce and are incorporated in contracts for the sale of goods
        worldwide. They provide rules and guidance to importers, exporters,
        lawyers, transporters, insurers, and students of international trade.
      </p>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-foreground">
          Seven Incoterms® 2020 rules for any mode of transport
        </h2>
        <ol className="mt-4 grid gap-4 lg:grid-cols-2">
          {INCOTERMS_ANY_MODE.map((item, index) => (
            <li
              key={item.term}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <span className="text-xs font-semibold tracking-[0.12em] text-gradient-brand">
                {index + 1}.
              </span>
              <h3 className="mt-1 text-base font-semibold text-foreground">
                {item.term}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-foreground">
          Four Incoterms® 2020 rules for ocean transport
        </h2>
        <ol className="mt-4 grid gap-4 lg:grid-cols-2">
          {INCOTERMS_OCEAN.map((item, index) => (
            <li
              key={item.term}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <span className="text-xs font-semibold tracking-[0.12em] text-gradient-brand">
                {index + 1}.
              </span>
              <h3 className="mt-1 text-base font-semibold text-foreground">
                {item.term}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

type TermClause = {
  id: string;
  title: string;
  paragraphs?: string[];
  subClauses?: { id: string; text: string; subItems?: string[] }[];
};

const TERMS_CLAUSES: TermClause[] = [
  {
    id: "1",
    title: "CARRIER'S TARIFF",
    paragraphs: [
      "The terms and conditions of the Carrier's applicable Tariff are incorporated herein. Attention is drawn to the terms therein relating to free storage time and to container and vehicle demurrage or detention. Copies of the relevant provisions of the applicable Tariff are obtainable from the Carrier upon request. In the case of inconsistency between the bill of lading and the applicable Tariff, this bill of lading shall prevail.",
    ],
  },
  {
    id: "3",
    title: "WARRANTY",
    paragraphs: [
      "The Merchant warrants that in agreeing to the Terms and Conditions hereof, including the Applicable Tariff(s), he is, or has the authority of, the Person owning or entitled to the possession of the Goods and/or Container and this Bill of Lading, and that all prior agreement and Freight agreement are merged in and superseded by the provisions of the Bill of Lading.",
    ],
  },
  {
    id: "4",
    title: "SUBCONTRACTING",
    subClauses: [
      {
        id: "4.1",
        text: "The carrier shall be entered to sub-contract on any terms whatsoever the whole or any part of the Carriage.",
      },
      {
        id: "4.2",
        text: "The Merchant undertakes that no claim or allegation whether arising in contract, bailment, tort or otherwise shall be made against any servant, agent, or Subcontractor of the Carrier which imposes or attempts to impose upon any of them or any vessel owned or chartered by any of them any liability whatsoever in connection with the Goods or the Carriage of the Goods whether or not arising out of negligence on the part of such persons. If any such claim or allegation should nevertheless be made, to indemnify the Carrier against all consequences thereof. Without prejudice to the foregoing every such servant, agent, and Subcontractor shall have the benefit of all Terms and Conditions of whatsoever nature herein contained or otherwise benefiting the Carrier including clause 26 hereof, the law and jurisdiction clause, as if such Terms and Conditions (including clause 26 hereof) were expressly for their benefit and, in entering into this contract, the Carrier, to the extent of such Terms and Conditions, does so on its own behalf, and also as agent and trustee for such servants, agents and Subcontractors.",
      },
      {
        id: "4.3",
        text: "The provisions of the second sentence of clause 4.2 including but not limited to the undertaking of the Merchant contained therein, shall extend to all claims or allegations of whatsoever nature against other persons chartering space on the carrying vessel.",
      },
      {
        id: "4.4",
        text: "The Merchant further undertakes that no claim or allegation in respect of the Goods shall be made against the Carrier by any Person other than in accordance with the Terms and Conditions of the bill of lading which imposes or attempts to impose upon the Carrier any liability whatsoever in connection with the Goods or the Carriage of the Goods, whether or not arising out of negligence on the part of the Carrier, and if any such claim or allegation should nevertheless be made, to indemnify the Carrier against all consequences thereof.",
      },
    ],
  },
  {
    id: "5",
    title: "CARRIER'S RESPONSIBILITY: PORT-TO-PORT SHIPMENT",
    subClauses: [
      {
        id: "5.1",
        text: "Where the carriage is Port-to-Port, then the liability (if any) of the Carrier for loss of or damage to the Goods occurring between the time of loading at the Port of Loading and the time of discharge at the Port of Discharge shall be determined in accordance with any national law making the Hague Rules compulsorily applicable to the bill of lading (which will be US COGSA for shipments to or from the United States of America) or in any other case in accordance with the Hague Rules Articles 1-8 inclusive only.",
      },
      {
        id: "5.2",
        text: "The Carrier shall have no liability whatsoever for any loss or damage to the Goods while in its actual or constructive possession before loading or after discharge, howsoever caused. Notwithstanding the above, in case and to the extent that any applicable compulsory law provides to the contrary, the Carrier shall have the benefit of every right, defense, limitation and liberty in the Hague Rules as applied by clause 5.1 during such additional compulsory period of responsibility, notwithstanding that the loss or damage did not occur at sea.",
      },
      {
        id: "5.3",
        text: "Where US COGSA applies then the provisions stated in the said Act shall govern before loading on the vessel or after discharge therefrom, as the case may be, during Carriage to or from a container yard or container freight station in or immediately adjacent to the sea terminal at the Port of Loading and/or Discharge. If the Carrier is requested by the Merchant to procure Carriage by an inland carrier in the United States of America and the inland carrier in his discretion agrees to do so, such carriage shall be procured by the Carrier as agent only to the Merchant and such carriage shall be subject to the inland carrier's contract and tariff, if for any reason the carriage is denied the right to act as agent at these times, his liability for loss or damage or delay to the Goods shall be determined in accordance with clause 6 hereof.",
      },
      {
        id: "5.4",
        text: "In the event that the Merchant requests the Carrier to deliver the goods:",
        subItems: [
          "(a) at port other than the Port of Discharge; or",
          "(b) (save in the United States of America) at a place of delivery instead of the port discharge, and the carrier in its absolute discretions agrees to such request, such further carriage will be undertaken on the basis that the terms and conditions of this bill of lading is to apply to such carriage as if the ultimate destination agreed with Merchant has been entered on the reverse side of this bill of lading as the port of discharge or place of delivery.",
        ],
      },
    ],
  },
  {
    id: "6",
    title: "CARRIER'S RESPONSIBILITY – MULTIMODAL TRANSPORT",
    paragraphs: [
      "Where the Carriage is Multimodal Transport, then the liability (if any) of the Carrier for loss of or damage to the Goods occurring between the period of responsibility (as may be listed in the Bill of Lading from the Place of Receipt or the Port of Loading, whichever is applicable, to the Port of Discharge or the Place of Delivery, whichever is applicable) shall be determined exclusively in accordance with the Singapore Multimodal Transport Act 2021. The said act entitles the Carrier to:",
    ],
    subClauses: [
      {
        id: "a",
        text: "exclude liability in certain circumstances as provided in S 15(2) – (5) of the Act",
      },
      {
        id: "b",
        text: "limit liability to the equivalent of 666.67 SDR per package or shipping unit or 2.00 SDR per kilogram of gross weight of the goods lost or damaged if Sea Carriage is involved and if not, to an amount not exceeding 8.33 SDR per Kilogram of the gross weight of the goods lost or damaged, and with respect to delay related claims to an amount equivalent to the freight under the contract.",
      },
      {
        id: "c",
        text: "Claim would be time barred if not pursued within 9 months of the date of delivery or on the date when the goods should have been delivered.",
      },
    ],
  },
  {
    id: "7",
    title: "COMPENSATION AND LIABILITY PROVISIONS",
    subClauses: [
      {
        id: "7.1",
        text: "Subject always to the Carrier's right to limit liability as provided for herein, if the Carrier is liable for compensation in respect of loss of or damage to the Goods, such compensation shall be calculated by reference for the invoice value of the Goods plus Freight and insurance if paid. If there is no invoice value of the Goods or if any such invoice is not bona fide. Such compensation shall be calculated by reference to the value of such Goods at the place and time they are delivered or should have been delivered to the Merchant. The value of the Goods shall be fixed according to the current market price, by reference to the normal value of goods of the same kind/or quality.",
      },
      {
        id: "7.2",
        text: "Same as is provided in clause 7.3:",
        subItems: [
          "(a) Where the Hague Rules apply hereunder by national law by virtue of clause 5.1 or clause 6.2(a) the Carrier's liability shall in no event exceed the amounts provided in the applicable national law. If the Hague Rules Article 1-8 only apply pursuant to clauses 5.1 or 6(c) the Carrier's maximum liability shall in no event exceed GBP 100 per Package or unit.",
          "(b) Where Carriage includes Carriage to, from or through a port in the United States of America and US COGSA applies by virtue of clauses 5.1 or 6.2(b) neither the Carrier nor the Vessel shall in any event be or become liable in an amount exceeding US$500 per package or customary freight unit.",
          "(c) In all other cases compensation shall not exceed the limitation of liability of 2 SDR Per kilo as provided in clause 6.1 (c)",
        ],
      },
      {
        id: "7.3",
        text: "The Merchant agrees and acknowledges that the Carrier has no knowledge of the value of the Goods and higher compensation than that provided for in this bill of lading may be claimed only when, with the consent of the Carrier, the value of the Goods declared by the Shipper upon delivery to the Carrier has been stated in the box marked "Declared Value" on the reverse of the bill of lading and extra freight paid. In that case, the amount of the declared value shall be substituted for the limits laid down in this bill of lading. Any partial loss or damage shall be adjusted pro rata on the basis of such declared value.",
      },
      {
        id: "7.4",
        text: "Nothing in the bill of lading shall operate to limit or derive the Carrier of any statutory protection, defense, exception, or limitation of liability authorized by any applicable laws, statutes of regulations or any country. The Carrier shall have the benefit of the said laws, statutes, or regulations as if it were the owner of any carrying ship or vessel.",
      },
    ],
  },
  {
    id: "8",
    title: "GENERAL",
    subClauses: [
      {
        id: "8.1",
        text: "The Carrier does not undertake that the Goods or any documents relating thereto shall arrive or be available at any point of place at any stage during the Carriage or at the Port of Discharge of the place of delivery at any particular time or to meet any particular requirement of any license, permission, sale contract, or credit of the Merchant or any market or use of the Goods and the Carrier shall under no circumstances whatsoever and howsoever arising be liable for any direct, indirect, or consequential loss or damage caused by delay. If the Carrier should nevertheless be held legally liable for any such direct or indirect or consequential loss or damage caused by such alleged delay, such liability shall in no event exceed the Freight paid for the carriage.",
      },
      {
        id: "8.2",
        text: "Save as is otherwise provided herein, the Carrier shall under no circumstances be liable for direct or indirect or consequential loss or damage arising from any other cause whatsoever or for loss of profit.",
      },
      {
        id: "8.3",
        text: "Once the Goods have been received by the Carrier for Carriage the Merchant shall not be entitled neither to impede, delay, suspend or stop or otherwise interfere with the Carrier's intended manner of performance of the carriage or the exercise of the liberties conferred by the bill of lading nor to instruct or require delivery of the Goods at other than the Port of Discharge or Place of Delivery named on the reverse hereof or such other Port of Place selected by the Carrier in the exercise of the liberties herein, for any reason whatsoever including but not limited to the exercise of any right of stoppage in transit conferred by the Merchant's contract of sale or otherwise. The Merchant shall indemnify the Carrier against all claims, liabilities, loss, damages, costs, delay, attorney fees and/or expenses caused to the Carrier, his Subcontractors, servants or agents or to any other cargo or to the owner of such cargo during the Carriage arising or resulting from any stoppage (whether temporary or permanent) in the Carriage of the Goods whether at the request of the Merchant, or in consequence of any breach by the Merchant of this clause, or in consequence of any dispute whatsoever in respect of the Goods (including, but without restriction, disputes as to ownership, title, quality, quantity or description of and/or payment for the Goods) involving any one or more party defined herein as the Merchant as between themselves or with any third party other than the Carrier and the liberties provided for in clauses 19 and 20 shall be available to the Carrier in the event of any such stoppage.",
      },
      {
        id: "8.4",
        text: "The Terms and Conditions of this bill of lading shall govern the responsibility of the Carrier in connection with or arising out of the supplying of a Container to the Merchant whether before, during or after the carriage.",
      },
    ],
  },
  {
    id: "9",
    title: "NOTICE OF LOSS, TIME BAR",
    paragraphs: [
      "Unless notice of loss or damage and the general nature of such loss or damage be given in writing to the Carrier or his agents at the Place of Delivery (or Port of Discharge if no Place of Delivery is named on the reverse hereof) before or at the time of removal of the Goods into the custody of the Merchant or if the loss or damage is not apparent within three days thereafter, such removal shall be prima facie evidence of the delivery by the Carrier of Goods as described in this bill of lading. In any event, the Carrier shall be discharged from all liability whatsoever in respect of the Goods unless suit is brought within one year after their delivery or the date when they should have been delivered.",
    ],
  },
  {
    id: "10",
    title: "DEFENCES AND LIMITS FOR THE CARRIER",
    paragraphs: [
      "The Terms and Conditions of whatever nature provided for in this bill of lading shall apply in any action against the Carrier for any loss or damage whatsoever and howsoever occurring (and, without restricting the generality of the foregoing, including delay, late delivery and or delivery without surrender of this bill of lading) and whether the action is founded in contract, bailment or in tort and even if the loss or damage arose as a result of unseaworthiness, negligence of fundamental breach of contract.",
    ],
  },
  {
    id: "11",
    title: "SHIPPER-PACKED CONTAINERS",
    subClauses: [
      {
        id: "11.1",
        text: "If a Container has not been packed by the Carrier, this bill of lading shall be a receipt only for such a Container.",
      },
      {
        id: "11.2",
        text: "The Carrier shall not be liable for loss of or damage to the contents and the Merchant shall indemnify the Carrier against any injury, loss, damage, liability or expense whatsoever incurred by the Carrier if such loss of or damage to the contents and or such injury, loss, damage, liability or expense has been caused by all matters beyond his control including, inter alia, without prejudice to the generality of this exclusion:",
        subItems: [
          "(a) the manner in which the Container has been packed; or",
          "(b) the unsuitability of the Goods for carriage in Containers: or",
          "(c) the unsuitability or defective condition of the Container or the incorrect setting of any thermostatic, ventilation, or other special controls thereof, provided that, if the Container has been supplied by the Carrier this unsuitability or defective condition could have apparent upon reasonable inspection by the merchant at or prior to the time the container was packed.",
        ],
      },
      {
        id: "11.3",
        text: "The merchant is responsible for the packing and sealing of all shipper-packed containers and, if a shipper packed container is delivered by the carrier with its original seal as affixed by the shipper intact, the carrier shall not be liable for any shortage of goods ascertained at delivery.",
      },
      {
        id: "11.4",
        text: "The shipper shall inspect containers before packing them and the use of containers shall be prima facie evidence of their being sound and suitable for use.",
      },
    ],
  },
  {
    id: "12",
    title: "PERISHABLE CARGO",
    subClauses: [
      {
        id: "12.1",
        text: "Goods, including goods of perishable nature shall be carried in ordinary containers without special protection, services, or other measures unless there is noted on the reverse side of the Bill of lading that the goods will be carried in a refrigerated, heated, electrically ventilated, or specifically equipped container or are to receive special attention in any way. The merchant undertakes not to tender for carriage of any goods which require refrigeration, ventilation, or any specialized attention without giving written notice of their nature and the required temperature or other setting of the thermostatic, ventilation or other special controls to the carrier. If the above requirements are not complied with the carrier shall not be liable for any loss for any loss or damage to the goods howsoever arising.",
      },
      {
        id: "12.2",
        text: "The Merchant should note that the refrigerated containers are not designed:",
        subItems: [
          "(a) to freeze down cargo which has not been presented for stuffing at or below its designated carrying temperature and the carrier shall not be responsible for the consequences of cargo being presented at a higher temperature than that required for carriage: nor",
          "(b) to monitor and control humidity levels, albeit a setting facility already exists in that humidity is influenced by many external factors and the carrier does not guarantee the maintenance of the any intended level of humidity inside any container.",
        ],
      },
      {
        id: "12.3",
        text: "The term "apparent good order and condition" when used in this bill of lading with reference to goods which require refrigeration, ventilation or other specialized attention does not mean that the Goods, when received were verified by the Carrier as being at the carrying temperature, humidity level or other condition designated by the Merchant.",
      },
      {
        id: "12.4",
        text: "The carrier shall not be liable for any loss or damage to the Goods arising from latent defects, derangement, breakdown, defrosting, stoppage of the refrigerating, ventilating or any other specialized machinery, plant, insulation and/or apparatus of the Container, vessel, conveyance and any other facilities, provided that the Carrier shall before and at the beginning of the Carriage exercise due diligence to maintain to the Container supplied by the Carrier in an efficient state.",
      },
    ],
  },
  {
    id: "13",
    title: "INSPECTION OF GOODS",
    paragraphs: [
      "The Carrier shall be entitled, but under no obligation, to open and/or scan any Package or Container at any time and to inspect the contents. If it appears at any time that the Goods cannot safely or properly be carried or carried further, either at all or without incurring any additional expense or taking any measures in relation to the Container or the Goods, the Carrier may without notice to the Merchant (but as his agent only) take and or incur any reasonable additional expense to carry or to continue the carriage there off, and/or to sell or dispose of the goods and/or abandon the carriage and/or store them ashore or afloat, under cover or in the open, at any place, whichever the carrier in his absolute discretion considers most appropriate, which sale, disposal, abandonment, or storage shall be deemed to constitute due delivery under the bill of lading. The carrier in exercising the liberties contained in this clause shall not be under any obligation to take any particular measures and shall not be liable for any loss, delay or damage howsoever arising from any action or lack of action under this clause.",
    ],
  },
  {
    id: "14",
    title: "DESCRIPTION OF GOODS",
    subClauses: [
      {
        id: "14.1",
        text: "This bill of lading shall be prima facie evidence of the receipt by the Carrier in apparent good order and condition, except as otherwise noted, of the total number of Containers or other packages or units indicated in the box entitled "Carriers Receipt" on the reverse side hereof.",
      },
      {
        id: "14.2",
        text: "No representation is made by the Carrier as to the weight, contents, measure, quantity, quality, description, condition, marks, numbers or value of the Goods and the Carrier shall be under no responsibility whatsoever in respect of such description or particulars.",
      },
      {
        id: "14.3",
        text: "The Shipper warrants to the Carrier that the particulars relating to the Goods as set out on the reverse hereof have been checked by the Shipper on receipt of this bill of lading and that such particulars, and any other particulars furnished by or on behalf of the Shipper, are adequate and correct. The Shipper also warrants that the goods are lawful goods, and contain no contraband, drugs, other illegal substances, or stowaways, and that the Goods will not cause loss damage or expense to the Carrier, or to any other cargo during the carriage.",
      },
      {
        id: "14.4",
        text: "If any particulars of any Letter of Credit and/or import License and/or Sales Contract and/or Invoice or Order number and/or details of any contract to which the Carrier is not a party, are shown on the face of this bill of lading, such particulars are included at the sole risk of the Merchant and for his convenience. The Merchant agrees that the inclusion of such particulars shall not be regarded as a declaration of value and in no way increases Carrier's liability under this bill of lading.",
      },
    ],
  },
  {
    id: "15",
    title: "MERCHANT'S RESPONSIBILITY",
    subClauses: [
      {
        id: "15.1",
        text: "All of the Persons coming within the definition of Merchant in clause 1 shall be jointly and severally liable for the Carrier for the due fulfillment of all obligations undertaken by the Merchant in this bill of lading.",
      },
      {
        id: "15.2",
        text: "The Merchant shall be liable for and shall indemnify the Carrier against all loss, damage, delay, fines, attorney fees and/or expenses arising from any breach of any of the warranties in clause 14.3 or from any other cause whatsoever in connection with the Goods for which the Carrier is not responsible.",
      },
      {
        id: "15.3",
        text: "The Merchant shall comply with all regulations or requirements of customs, port and other authorities, and shall bear and pay all duties, taxes, fines, imposts, expenses or losses (including, without prejudice to the generality of the foregoing Freight for any additional Carriage undertaken), incurred or suffered by reason thereof, or by reason of any illegal, incorrect or insufficient declaration or by reason of any illegal, incorrect or insufficient declaration, marking, numbering or addressing of the Goods, and shall indemnify the Carrier in respect thereof.",
      },
      {
        id: "15.4",
        text: "If Containers supplied by or on behalf of the Carrier are unpacked at the Merchant's premises, the Merchant is responsible for returning the empty Containers, with interiors clean, odor free and in the same condition as received, to the point or place designated by the Carrier, within the time prescribed. Should a Container not be returned in the condition required and/or within the time prescribed in the Tariff, the Merchant shall be liable for any detention, loss or expense incurred as a result thereof.",
      },
      {
        id: "15.5",
        text: "Containers released into the care of the Merchant for packing, unpacking or any other purpose whatsoever are at the sole risk of the Merchant until redelivered to the Carrier. The Merchant shall indemnify the Carrier for all loss of and/or damage and/or delay to such Containers. Merchants are deemed to be aware of the dimensions and capacity of any Containers released to them.",
      },
    ],
  },
  {
    id: "16",
    title: "FREIGHT EXPENSES AND FEES",
    subClauses: [
      {
        id: "16.1",
        text: "Full Freight shall be payable based on particulars furnished by or on behalf of the Shipper. The carrier may at any time open the Goods or Container(s) and, if the Shippers particulars are incorrect the Merchant and the Goods shall be liable for the correct Freight and any expenses incurred in examining, weighing, measuring or valuing the Goods.",
      },
      {
        id: "16.2",
        text: "Full Freight shall be considered completely earned on receipt of the Goods by the Carrier and shall be paid and nonrefundable in any event.",
      },
      {
        id: "16.3",
        text: "All sums payable to the Carrier are due on demand and shall be paid in full in United States Currency or, at the Carrier's option, in its equivalent in the currency of the Port of Loading or of Discharge or the Place of Receipt or of Delivery or as specified in the Carrier's Tariff.",
      },
      {
        id: "16.4",
        text: "The Merchant's attention is drawn to the stipulations concerning currency in which the Freight is to be paid, rate of exchange, devaluation, additional insurance premium and other contingencies relative to Freight in the applicable Tariff. In the event of any discrepancy between Freight (incl. charges etc.) items in the bill of lading any Carrier invoices, the latter shall prevail.",
      },
      {
        id: "16.5",
        text: "All Freight shall be paid without any set-off, counterclaim, deduction or stay of execution at latest before delivery of the Goods.",
      },
      {
        id: "16.6",
        text: "If the Merchant fails to pay the Freight when due he shall be liable also for payment of service fee or interest due on any outstanding sum, reasonable attorney fees and expenses incurred in collecting any sums due to the Carrier. Payment of Freight and charges to a freight forwarder, broker, or anyone other than the Carrier or its authorized agent, shall not be deemed payment to the Carrier and shall be made at the Merchant's sole risk.",
      },
    ],
  },
  {
    id: "17",
    title: "LIEN",
    paragraphs: [
      "The Carrier shall have a lien on the Goods and any documents relating thereto for all sums payable to the Carrier under this contract and for general average contributions to whomsoever due. The Carrier shall also have a lien against the Merchant on the Goods and any document relating thereto for all sums due from him for the Carrier under any other contract. The Carrier may exercise his lien at any time and any place in his sole discretion, whether the contractual Carriage is completed or not. In any event any lien shall extend to cover the cost of recovering any sums due and for that purpose the Carrier shall have the right to sell the Goods by public auction or private treaty, without notice to the Merchant. The Carrier's lien shall survive delivery of the Goods.",
    ],
  },
  {
    id: "18",
    title: "OPTIONAL STOWAGE, DECK CARGO AND LIVESTOCK",
    subClauses: [
      {
        id: "18.1",
        text: "The Goods may be packed by the Carrier in Containers and consolidated with other goods in Containers.",
      },
      {
        id: "18.2",
        text: "Goods, whether packed in Containers or not, may be carried on deck or under deck without notice for the Merchant unless on the reverse side hereof it is specifically stipulated that the containers or Goods will be carried under deck. If carried under deck, the carrier shall not be required to note, mark or stamp on the bill of lading any statement of such on deck carriage. Save as provided in clause 18.3 such goods (except livestock) carried on or under deck and whether or not stated to be carried on deck shall participate in general average and shall be deemed to be within the definition of goods for the purpose of the Hague rules or US COGSA and shall be carried subject to such rules or act, whichever is applicable.",
      },
      {
        id: "18.3",
        text: "Goods (not being Goods stowed in Containers other than flats or pallets) which are stated herein to be carried on deck and livestock, whether or not carried on deck, are carried without responsibility on the part of the Carrier for loss or damage of whatsoever nature or delay arising during the Carriage whether caused by unseaworthiness of negligence or any other cause whatsoever and neither the Hague Rules nor US COGSA shall apply or embarking or any person(s), undergoing repairs and/or drydocking, towing or being towed, assisting other vessels, making trail and adjusting instruments. Anything done or not done in accordance with clause 19.1 or any delay arising therefrom shall be deemed to be within the contractual Carriage and shall not be a deviation.",
      },
    ],
  },
  {
    id: "19",
    title: "METHODS AND ROUTES OF CARRIAGE",
    subClauses: [
      {
        id: "19.1",
        text: "The Carrier may at any time and without notice to the Merchant:",
        subItems: [
          "(a) use any means of transport or storage whatsoever;",
          "(b) Transfer the Goods from one conveyance to another including transshipping or carrying the same on a vessel other than the vessel named on the reverse hereof or by any other means of transport whatsoever and even though transshipment or forwarding of the Goods may not have been contemplated or provided for herein;",
          "(c) unpack and remove the Goods which have been packed into a container and forward them via Container or otherwise;",
          "(d) sail without pilots, proceed via any route (whether or not the nearest or most direct or customary or advertised route) at any speed and proceed to, return to and stay at any port or place whatsoever (including the Port of Loading herein provided) once or more often and in any order in or out of the route or in a contrary direction to or beyond the Port of Discharge once or more often;",
          "(e) load and unload the Goods at any place or port (whether or not any such port is named on the reverse thereof as the Port of Loading or Port of Discharge) and store the Goods at any such port or place;",
          "(f) comply with any orders or recommendations given by any government or authority or any Person or body or purporting to act as or on behalf of such government or authority or having under the terms of the insurance on any conveyance employed by the Carrier the right to give orders or directions.",
        ],
      },
      {
        id: "19.2",
        text: "The liberties set out in clause 19.1 may be invoked by the carrier for any purpose whatsoever whether or not connected with the Carriage of the Goods, including but not limited to loading or unloading other goods, additional expense so incurred. The Carrier in the liberties contained in this clause shall not be under any obligation to take any particular measures and shall not be liable for any loss, delay or damage howsoever arising from any action or lack of action under this clause.",
      },
    ],
  },
  {
    id: "20",
    title: "MATTERS AFFECTING PERFORMANCE",
    paragraphs: [
      "If at any time carriage is or is likely to be affected by any hindrance, risk, danger, delay, difficulty or disadvantage of whatsoever kind and howsoever arising which cannot be avoided by the exercise of reasonable endeavors, even though the circumstances giving rise to such hindrance, risk, danger, delay, difficulty or disadvantage existed at the time this contract was entered into or the Goods were received for Carriage, the Carrier may at his sole discretion and without notice to the Merchant and whether or not the carriage is commenced either:",
    ],
    subClauses: [
      {
        id: "(a)",
        text: "Carry the Goods to the contracted Port of Discharge or Place of Delivery, whichever is applicable, by an alternative route to that indicated in this bill of lading or that which is usual for Goods consigned to that Port of Discharge or Place of Delivery. If the Carrier elects to invoke the terms of this clause 20(a) then, notwithstanding the provisions of clause 19 hereof, he shall be entitled to charge such additional Freight as the Carrier may determine; or",
      },
      {
        id: "(b)",
        text: "Suspend the Carriage of the Goods and store them ashore or afloat upon the Terms and Conditions of this bill of lading and endeavor to forward them as soon as possible, but the Carrier makes no representations as to the maximum period of suspension. If the Carrier elects to invoke the terms of this clause 20(b) then, notwithstanding the provisions of clause 19 hereof, he shall be entitled to charge such additional Freight and Costs as the Carrier may determine; or",
      },
      {
        id: "(c)",
        text: "Abandon the carriage of the Goods and place them at the Merchant's disposal at any place or port which the Carrier may deem safe and convenient, whereupon the responsibility of the Carrier in respect of such Goods shall cease. The Carrier shall nevertheless be entitled to full Freight on the Goods received for the carriage, and the Merchant shall pay any additional costs incurred by reason of the abandonment of the Goods.",
      },
    ],
  },
  {
    id: "21",
    title: "DANGEROUS GOODS",
    subClauses: [
      {
        id: "21.1",
        text: "No Goods which are or which may become of a dangerous, noxious, hazardous, flammable, or damaging nature (including radioactive material), or which are or may become liable to damage any Persons or property whatsoever, and whether or not so listed in any official or unofficial, international or national code, convention, listing or tale shall be tendered to the Carrier for Carriage without previously giving written notice of their nature, character, name, label and classification (if applicable) to the Carrier and obtaining his consent in writing and without distinctly marking the Goods and the Container or other covering on the outside so as to indicate the nature and character of any such Goods and so as to comply with any applicable laws, regulations or requirements. If any Such Goods are delivered to the Carrier without obtaining his consent and/or such marking, or if in the opinion of the Carrier the Goods are or are liable to become of a dangerous, noxious, hazardous, flammable or damaging nature they may at any time or place be unloaded, destroyed and disposed of, abandoned or rendered harmless without compensation to the Merchant and without prejudice to the Carrier's right to Freight and, the Carrier shall be under no liability to make any general average contribution in respect of such Goods.",
      },
      {
        id: "21.2",
        text: "The Merchant warrants that such Goods are packed in a manner adequate to withstand the risks of Carriage having regard to their nature and in compliance with all laws, regulations or requirements which may be applicable during the carriage.",
      },
      {
        id: "21.3",
        text: "The Merchant shall indemnify the Carrier against all claims, liabilities, loss, damage, delay, costs, fines and/or expenses arising in consequence of the Carriage of such Goods, and/or arising from breach of any of the warranties in clause 21.2 including any steps taken by the Carrier pursuant to clause 21.1 whether or not the Merchant was aware of the nature of such Goods.",
      },
      {
        id: "21.4",
        text: "Nothing contained in this clause shall deprive the Carrier or any of his rights provided for elsewhere.",
      },
    ],
  },
  {
    id: "22",
    title: "NOTIFICATION AND DELIVERY",
    subClauses: [
      {
        id: "22.1",
        text: "Any mentioning in this bill of lading of parties to be notified of the arrival of the Goods is for information of the Carrier. Failure to give such notification shall not involve the Carrier in any liability nor relieve the Merchant of any obligation hereunder.",
      },
      {
        id: "22.2",
        text: "The Merchant shall take delivery of the goods within the time provided for in the Carrier's applicable Tariff. If the Merchant fails to do so, the Carrier may without notice unpack the goods if packed in containers and/or store the Goods ashore, afloat, in the open or under cover at the sole risk of the Merchant, such storage shall constitute due delivery hereunder, and thereupon all liability whatsoever of the Carrier in respect of the Goods or that part thereof shall cease, and the costs of such storage shall forthwith upon demand be paid by the Merchant to the Carrier.",
      },
      {
        id: "22.3",
        text: "If the Goods are unclaimed within a reasonable time or whenever in the Carrier's opinion the Goods are likely to deteriorate, decay or become worthless, or incur charges whether for storage or otherwise in excess of their value, the Carrier may at his discretion and without prejudice to any other rights which he may have against the Merchant without notice and without any responsibility attaching to him sell, abandon or otherwise dispose of the Goods at the sole risk and expense of the Merchant and apply any proceeds of sale in reduction of the sums due to the Carrier from the Merchant in respect of this bill of lading.",
      },
      {
        id: "22.4",
        text: "Refusal by the Merchant to take delivery of the Goods in accordance with the terms of this clause and/or to mitigate any loss or damage thereto shall constitute a waiver by the Merchant to the Carrier of any claim whatsoever relating to the goods or the Carriage thereof.",
      },
      {
        id: "22.5",
        text: "The Carrier may in his absolute discretion receive the Goods as Full Container Load and deliver them as less than Full Container Load and/or as break-bulk cargo and/or deliver the Goods to more than one receiver. In such event the Carrier shall not be liable for any shortage, loss, damage, or discrepancies of the Goods, which are found upon the unpacking of the Container.",
      },
    ],
  },
  {
    id: "23",
    title: "BOTH-TO-BLAME COLLISION CAUSE",
    paragraphs: [
      "The Both-to-Blame Collision and New Jason clauses published and/or approved by BIMCO and obtainable from the Carrier or his agent upon request are hereby incorporated herein.",
    ],
  },
  {
    id: "24",
    title: "GENERAL AVERAGE AND SALVAGE",
    subClauses: [
      {
        id: "24.1",
        text: "General average to be adjusted at any port or place at the Carrier's option and to be settled according to the York-Antwerp Rules 1594, this covering all Goods carried on or under deck. General average on a vessel not operated by the Carrier shall be adjusted according to the requirements of the operator of that vessel.",
      },
      {
        id: "24.2",
        text: "Such security including a cash deposit as the Carrier may deem sufficient to cover the estimated contribution of the goods and any salvage and special charges thereon, shall if required, be submitted to the Carrier prior to the delivery of the Goods. The Carrier shall be under no obligation to exercise any lien for general average contribution due to the Merchant.",
      },
      {
        id: "24.3",
        text: "If a salving ship is owned or operated by the Carrier, salvage shall be paid for as fully as if the said salving ship belonged to strangers.",
      },
    ],
  },
  {
    id: "25",
    title: "VARIATION OF THE CONTRACT",
    paragraphs: [
      "No servant or agent of the Carrier shall have the power to waive or vary any Terms and Conditions of this bill of lading unless such waiver or variations is in writing and is specifically authorized or ratified in writing by the Carrier.",
    ],
  },
];

function TermsPanel() {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gradient-brand">
        Resources
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Terms and Conditions
      </h1>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
        Standard trading terms and conditions governing sea freight, multimodal
        transport and tanktainer services provided by Vyom Global Logistics.
      </p>

      <ol className="mt-8 flex list-none flex-col gap-6">
        {TERMS_CLAUSES.map((clause) => (
          <li key={clause.id} className="scroll-mt-24">
            <h2 className="text-base font-semibold text-foreground">
              {clause.id}. {clause.title}
            </h2>
            {clause.paragraphs?.map((paragraph, index) => (
              <p
                key={index}
                className="mt-2 text-sm leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
            {clause.subClauses && (
              <ol className="mt-3 flex list-none flex-col gap-2">
                {clause.subClauses.map((sub) => (
                  <li key={sub.id}>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      <span className="font-medium text-foreground">
                        {sub.id}
                      </span>{" "}
                      {sub.text}
                    </p>
                    {sub.subItems && (
                      <ul className="mt-2 flex list-none flex-col gap-1 pl-4">
                        {sub.subItems.map((item, index) => (
                          <li
                            key={index}
                            className="text-sm leading-relaxed text-muted-foreground"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ol>
    </>
  );
}

function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader variant="network" />
      <main className="mx-auto max-w-[90rem] px-5 pb-20 pt-32 sm:px-8 sm:pt-40">
        <Tabs defaultValue="definitions" className="mt-2 flex flex-col items-center">
          <TabsList className="h-auto flex-wrap gap-1 rounded-xl bg-muted p-1">
            <TabsTrigger value="definitions" className={TAB_CLASS}>
              Definitions
            </TabsTrigger>
            <TabsTrigger value="incoterms" className={TAB_CLASS}>
              Incoterms
            </TabsTrigger>
            <TabsTrigger value="terms" className={TAB_CLASS}>
              Terms and Conditions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="definitions" className="mt-8 w-full">
            <DefinitionsPanel />
          </TabsContent>

          <TabsContent value="incoterms" className="mt-8 w-full">
            <IncotermsPanel />
          </TabsContent>

          <TabsContent value="terms" className="mt-8 w-full">
            <TermsPanel />
          </TabsContent>
        </Tabs>
      </main>
      <SiteFooter />
    </div>
  );
}
