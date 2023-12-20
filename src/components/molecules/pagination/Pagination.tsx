import { TfiArrowCircleLeft as LeftArrowIcon, TfiArrowCircleRight as RightArrowIcon } from "react-icons/tfi";

import { PaginationLayout } from "./Pagination.styled";

function Pagination() {
	return(
		<PaginationLayout>
			<LeftArrowIcon size={20}/>
				<div>1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>
				<div>5</div>
				<div>6</div>
				<div>7</div>
				<div>8</div>
				<div>9</div>
			<RightArrowIcon size={20}/>
		</PaginationLayout>
	)
}

export default Pagination;