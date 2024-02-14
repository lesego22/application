/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Merchant } from "@prisma/client";

export class MerchantServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MerchantCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.MerchantCountArgs>
  ): Promise<number> {
    return this.prisma.merchant.count(args);
  }

  async merchants<T extends Prisma.MerchantFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MerchantFindManyArgs>
  ): Promise<Merchant[]> {
    return this.prisma.merchant.findMany(args);
  }
  async merchant<T extends Prisma.MerchantFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MerchantFindUniqueArgs>
  ): Promise<Merchant | null> {
    return this.prisma.merchant.findUnique(args);
  }
  async createMerchant<T extends Prisma.MerchantCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MerchantCreateArgs>
  ): Promise<Merchant> {
    return this.prisma.merchant.create<T>(args);
  }
  async updateMerchant<T extends Prisma.MerchantUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MerchantUpdateArgs>
  ): Promise<Merchant> {
    return this.prisma.merchant.update<T>(args);
  }
  async deleteMerchant<T extends Prisma.MerchantDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MerchantDeleteArgs>
  ): Promise<Merchant> {
    return this.prisma.merchant.delete(args);
  }
}
