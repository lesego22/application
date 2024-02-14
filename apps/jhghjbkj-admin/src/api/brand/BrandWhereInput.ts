import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type BrandWhereInput = {
  id?: StringFilter;
  image?: StringNullableFilter;
  isActive?: BooleanNullableFilter;
  merchant?: StringNullableFilter;
  name?: StringNullableFilter;
};
