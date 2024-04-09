"use client";

import { useEffect } from "react";

import styles from "./page.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Footer, Header } from "./components";

export default function Home() {
	// initialize animation
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<>
			<Header />
			<main className={styles.main}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
				id enim illum delectus nam, impedit sint hic aspernatur
				provident odit ipsam assumenda. Magnam alias, dolores veritatis
				eveniet, quo reiciendis velit laboriosam labore placeat nesciunt
				rem obcaecati unde vitae accusantium cum at nobis. Praesentium
				corrupti, adipisci est voluptate soluta cupiditate et nisi
				deserunt dolor impedit veritatis alias voluptatem dicta
				doloribus recusandae nemo aliquam tempore quo ratione quam
				voluptatibus. Blanditiis officia non reprehenderit dolorum eius
				amet adipisci velit voluptas, accusantium nemo tenetur ut soluta
				cumque odit error est earum iure corrupti a delectus aliquam
				modi tempora. Ea porro quis, molestiae beatae nobis rem dolorum
				molestias! Tempore esse dolorem sequi fugiat hic aspernatur
				temporibus recusandae ducimus voluptatem optio? Non perferendis
				consectetur accusamus numquam sint, saepe, quod tempore laborum
				sit fugit illo incidunt doloribus sapiente voluptates quis
				provident inventore! Reprehenderit aliquam sed nesciunt
				obcaecati placeat consectetur sit dolores odit, eligendi
				deserunt atque, assumenda tempora. Consectetur nostrum similique
				laudantium error. Id corporis similique, nihil porro ducimus
				eius tempora quia sed temporibus perferendis dolorem voluptas
				molestiae consequatur quo exercitationem consequuntur obcaecati
				dolor. Similique nihil totam hic, suscipit consectetur sunt nam
				laboriosam laborum sint placeat ullam adipisci, dignissimos
				omnis magni, doloremque repellendus facilis perferendis alias
				amet aliquid incidunt cum! Vel enim necessitatibus laboriosam
				quas aspernatur eum quos debitis, nesciunt cumque nihil amet
				facere neque sint natus maxime ex exercitationem quam ratione
				quo harum quia. Impedit iste quibusdam illum modi error nostrum
				perferendis nisi, cum quos deleniti iure neque, asperiores
				distinctio porro dignissimos? Facere, tempore commodi reiciendis
				sint veniam iusto facilis soluta. Id non explicabo suscipit,
				soluta aspernatur nisi, aliquid eveniet velit quod sapiente ut
				nostrum deserunt obcaecati molestiae et commodi provident
				doloremque! Harum optio itaque tempora, laboriosam nihil et
				laudantium assumenda blanditiis molestias ut adipisci quaerat ad
				omnis eos dicta officia quod est commodi dolorum. Sapiente,
				eius.
			</main>
			<Footer />
		</>
	);
}
