/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Brand } from "@prisma/client";

export class BrandServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.BrandCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.BrandCountArgs>
  ): Promise<number> {
    return this.prisma.brand.count(args);
  }

  async brands<T extends Prisma.BrandFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BrandFindManyArgs>
  ): Promise<Brand[]> {
    return this.prisma.brand.findMany(args);
  }
  async brand<T extends Prisma.BrandFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BrandFindUniqueArgs>
  ): Promise<Brand | null> {
    return this.prisma.brand.findUnique(args);
  }
  async createBrand<T extends Prisma.BrandCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BrandCreateArgs>
  ): Promise<Brand> {
    return this.prisma.brand.create<T>(args);
  }
  async updateBrand<T extends Prisma.BrandUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BrandUpdateArgs>
  ): Promise<Brand> {
    return this.prisma.brand.update<T>(args);
  }
  async deleteBrand<T extends Prisma.BrandDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BrandDeleteArgs>
  ): Promise<Brand> {
    return this.prisma.brand.delete(args);
  }
}
