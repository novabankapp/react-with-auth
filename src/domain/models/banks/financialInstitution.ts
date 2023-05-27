export type FinancialInstitution = {
    name: string,
    recordId: number,
    uniqueIdentifier: string,
    isActive: boolean,
    financialInstitutionCategory: FinancialInstitutionCategory
}
export type FinancialInstitutionCategory = {
    recordId: number,
    name: string,
  }

export interface FinancialInstitutionPage{
    data : FinancialInstitution[],
    count: number
}
export interface FinancialInstitutionCategoryPage{
  data : FinancialInstitutionCategory[],
  count: number
}