
export interface House{
  type: string;
  id: string;
  links: any;
  attributes: Atributes []
}

export interface Atributes {
  field_inmu_imag_arra: string[];
  field_inmu_nume_habi: number;
  field_inmu_pobl: string;
  field_inmu_prec: string;
  field_inmu_refe: string;
  field_inmu_tipo_sin_agru: string;
  field_inmu_tipo_via: string;
  field_inmu_area_cons: string;
}



