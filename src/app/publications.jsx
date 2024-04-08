import { useEffect, useState } from "react";

const usePublications = () => {
	const [publications, setPublications] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch(`${window.location.origin}/api/publications`)
			.then((response) => response.json())
			.then((response) => setPublications(response))
			.catch((error) => {
				console.log(error);
				setPublications([]);
			})
			.finally(() => setIsLoading(false));
	}, []);

	return { isLoading, publications };
};

export default usePublications;
