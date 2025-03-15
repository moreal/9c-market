import { For, Suspense, createSignal, onMount } from "solid-js";
import { useCurrency } from "../contexts/CurrencyContext";
import HeroiconsOutlineChevronDown from "~icons/heroicons-outline/chevron-down";
import { config } from "~/config";

export default function CurrencySelector() {
	const { currency, setCurrency } = useCurrency();
	const [isOpen, setIsOpen] = createSignal(false);

	const toggleDropdown = () => setIsOpen(!isOpen());

	// Close dropdown when clicking outside
	onMount(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement;
			if (!target.closest(".currency-selector")) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	});

	return (
		<div class="relative ml-auto currency-selector">
			<button
				type="button"
				onClick={toggleDropdown}
				class="flex items-center bg-sky-700 hover:bg-sky-600 text-white px-3 py-1 rounded-lg focus:outline-none transition-colors duration-200"
			>
				<span class="mr-1">{currency()}</span>
				<HeroiconsOutlineChevronDown
					stroke="currentColor"
					fill="none"
					viewBox="0 0 24 24"
					class="stroke-2 h-4 w-4"
				/>
			</button>

			{isOpen() && (
				<ul class="absolute right-0 mt-2 py-2 w-24 bg-white rounded-md shadow-lg z-10">
					<For each={config.currency.availableCurrencies}>
						{(curr) => (
							<li
								class={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
									currency() === curr
										? "text-sky-600 font-medium"
										: "text-gray-700"
								}`}
								onClick={() => {
									setCurrency(curr);
									setIsOpen(false);
								}}
							>
								{curr}
							</li>
						)}
					</For>
				</ul>
			)}
		</div>
	);
}
