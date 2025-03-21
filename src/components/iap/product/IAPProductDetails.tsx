import type { Product } from "~/types/iap";
import AttributeItem from "~/components/ui/AttributeItem";

type IAPProductDetailsProps = {
	product: Product;
};

export default function IAPProductDetails(props: IAPProductDetailsProps) {
	const { product } = props;

	return (
		<div class="grid grid-cols-2 gap-3 text-sm text-gray-600">
			{product.required_level && (
				<AttributeItem
					icon="lightning"
					label="Required Level:"
					value={product.required_level}
				/>
			)}

			{product.daily_limit && (
				<AttributeItem
					icon="clock"
					label="Daily Limit:"
					value={product.daily_limit}
				/>
			)}

			{product.weekly_limit && (
				<AttributeItem
					icon="calendar"
					label="Weekly Limit:"
					value={product.weekly_limit}
				/>
			)}

			{product.account_limit && (
				<AttributeItem
					icon="user"
					label="Account Limit:"
					value={product.account_limit}
				/>
			)}

			{product.product_type && (
				<AttributeItem icon="tag" label="Type:" value={product.product_type} />
			)}
		</div>
	);
}
