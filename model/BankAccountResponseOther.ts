/**
 * MarketPay API
 * API for Smart Contracts and Payments
 *
 * OpenAPI spec version: v2.01
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface BankAccountResponseOther {
    /**
     * The Country where the bank account is held
     */
    country?: BankAccountResponseOther.CountryEnum;

    /**
     * The BIC of the bank account
     */
    bIC?: string;

    /**
     * The account number of the bank account. Must be numbers only. Canadian account numbers must be a maximum of 20 digits
     */
    accountNumber?: string;

    /**
     * The type of bank account
     */
    type?: BankAccountResponseOther.TypeEnum;

    /**
     * The address of the owner of the bank account
     */
    ownerAddress?: models.Address;

    /**
     * The name of the owner of the bank account
     */
    ownerName?: string;

    /**
     * The object owner's UserId
     */
    userId?: string;

    /**
     * Whether the bank account is active or not
     */
    active?: boolean;

    id?: string;

    creationDate?: number;

    tag?: string;

}
export namespace BankAccountResponseOther {
    export enum CountryEnum {
        NotSpecified = <any> 'NotSpecified',
        AD = <any> 'AD',
        AE = <any> 'AE',
        AF = <any> 'AF',
        AG = <any> 'AG',
        AI = <any> 'AI',
        AL = <any> 'AL',
        AM = <any> 'AM',
        AO = <any> 'AO',
        AQ = <any> 'AQ',
        AR = <any> 'AR',
        AS = <any> 'AS',
        AT = <any> 'AT',
        AU = <any> 'AU',
        AW = <any> 'AW',
        AX = <any> 'AX',
        AZ = <any> 'AZ',
        BA = <any> 'BA',
        BB = <any> 'BB',
        BD = <any> 'BD',
        BE = <any> 'BE',
        BF = <any> 'BF',
        BG = <any> 'BG',
        BH = <any> 'BH',
        BI = <any> 'BI',
        BJ = <any> 'BJ',
        BL = <any> 'BL',
        BM = <any> 'BM',
        BN = <any> 'BN',
        BO = <any> 'BO',
        BQ = <any> 'BQ',
        BR = <any> 'BR',
        BS = <any> 'BS',
        BT = <any> 'BT',
        BV = <any> 'BV',
        BW = <any> 'BW',
        BY = <any> 'BY',
        BZ = <any> 'BZ',
        CA = <any> 'CA',
        CC = <any> 'CC',
        CD = <any> 'CD',
        CF = <any> 'CF',
        CG = <any> 'CG',
        CH = <any> 'CH',
        CI = <any> 'CI',
        CK = <any> 'CK',
        CL = <any> 'CL',
        CM = <any> 'CM',
        CN = <any> 'CN',
        CO = <any> 'CO',
        CR = <any> 'CR',
        CU = <any> 'CU',
        CV = <any> 'CV',
        CW = <any> 'CW',
        CX = <any> 'CX',
        CY = <any> 'CY',
        CZ = <any> 'CZ',
        DE = <any> 'DE',
        DJ = <any> 'DJ',
        DK = <any> 'DK',
        DM = <any> 'DM',
        DO = <any> 'DO',
        DZ = <any> 'DZ',
        EC = <any> 'EC',
        EE = <any> 'EE',
        EG = <any> 'EG',
        EH = <any> 'EH',
        ER = <any> 'ER',
        ES = <any> 'ES',
        ET = <any> 'ET',
        FI = <any> 'FI',
        FJ = <any> 'FJ',
        FK = <any> 'FK',
        FM = <any> 'FM',
        FO = <any> 'FO',
        FR = <any> 'FR',
        GA = <any> 'GA',
        GB = <any> 'GB',
        GD = <any> 'GD',
        GE = <any> 'GE',
        GF = <any> 'GF',
        GG = <any> 'GG',
        GH = <any> 'GH',
        GI = <any> 'GI',
        GL = <any> 'GL',
        GM = <any> 'GM',
        GN = <any> 'GN',
        GP = <any> 'GP',
        GQ = <any> 'GQ',
        GR = <any> 'GR',
        GS = <any> 'GS',
        GT = <any> 'GT',
        GU = <any> 'GU',
        GW = <any> 'GW',
        GY = <any> 'GY',
        HK = <any> 'HK',
        HM = <any> 'HM',
        HN = <any> 'HN',
        HR = <any> 'HR',
        HT = <any> 'HT',
        HU = <any> 'HU',
        ID = <any> 'ID',
        IE = <any> 'IE',
        IL = <any> 'IL',
        IM = <any> 'IM',
        IN = <any> 'IN',
        IO = <any> 'IO',
        IQ = <any> 'IQ',
        IR = <any> 'IR',
        IS = <any> 'IS',
        IT = <any> 'IT',
        JE = <any> 'JE',
        JM = <any> 'JM',
        JO = <any> 'JO',
        JP = <any> 'JP',
        KE = <any> 'KE',
        KG = <any> 'KG',
        KH = <any> 'KH',
        KI = <any> 'KI',
        KM = <any> 'KM',
        KN = <any> 'KN',
        KP = <any> 'KP',
        KR = <any> 'KR',
        KW = <any> 'KW',
        KY = <any> 'KY',
        KZ = <any> 'KZ',
        LA = <any> 'LA',
        LB = <any> 'LB',
        LC = <any> 'LC',
        LI = <any> 'LI',
        LK = <any> 'LK',
        LR = <any> 'LR',
        LS = <any> 'LS',
        LT = <any> 'LT',
        LU = <any> 'LU',
        LV = <any> 'LV',
        LY = <any> 'LY',
        MA = <any> 'MA',
        MC = <any> 'MC',
        MD = <any> 'MD',
        ME = <any> 'ME',
        MF = <any> 'MF',
        MG = <any> 'MG',
        MH = <any> 'MH',
        MK = <any> 'MK',
        ML = <any> 'ML',
        MM = <any> 'MM',
        MN = <any> 'MN',
        MO = <any> 'MO',
        MP = <any> 'MP',
        MQ = <any> 'MQ',
        MR = <any> 'MR',
        MS = <any> 'MS',
        MT = <any> 'MT',
        MU = <any> 'MU',
        MV = <any> 'MV',
        MW = <any> 'MW',
        MX = <any> 'MX',
        MY = <any> 'MY',
        MZ = <any> 'MZ',
        NA = <any> 'NA',
        NC = <any> 'NC',
        NE = <any> 'NE',
        NF = <any> 'NF',
        NG = <any> 'NG',
        NI = <any> 'NI',
        NL = <any> 'NL',
        NO = <any> 'NO',
        NP = <any> 'NP',
        NR = <any> 'NR',
        NU = <any> 'NU',
        NZ = <any> 'NZ',
        OM = <any> 'OM',
        PA = <any> 'PA',
        PE = <any> 'PE',
        PF = <any> 'PF',
        PG = <any> 'PG',
        PH = <any> 'PH',
        PK = <any> 'PK',
        PL = <any> 'PL',
        PM = <any> 'PM',
        PN = <any> 'PN',
        PR = <any> 'PR',
        PS = <any> 'PS',
        PT = <any> 'PT',
        PW = <any> 'PW',
        PY = <any> 'PY',
        QA = <any> 'QA',
        RE = <any> 'RE',
        RO = <any> 'RO',
        RS = <any> 'RS',
        RU = <any> 'RU',
        RW = <any> 'RW',
        SA = <any> 'SA',
        SB = <any> 'SB',
        SC = <any> 'SC',
        SD = <any> 'SD',
        SE = <any> 'SE',
        SG = <any> 'SG',
        SH = <any> 'SH',
        SI = <any> 'SI',
        SJ = <any> 'SJ',
        SK = <any> 'SK',
        SL = <any> 'SL',
        SM = <any> 'SM',
        SN = <any> 'SN',
        SO = <any> 'SO',
        SR = <any> 'SR',
        SS = <any> 'SS',
        ST = <any> 'ST',
        SV = <any> 'SV',
        SX = <any> 'SX',
        SY = <any> 'SY',
        SZ = <any> 'SZ',
        TC = <any> 'TC',
        TD = <any> 'TD',
        TF = <any> 'TF',
        TG = <any> 'TG',
        TH = <any> 'TH',
        TJ = <any> 'TJ',
        TK = <any> 'TK',
        TL = <any> 'TL',
        TM = <any> 'TM',
        TN = <any> 'TN',
        TO = <any> 'TO',
        TR = <any> 'TR',
        TT = <any> 'TT',
        TV = <any> 'TV',
        TW = <any> 'TW',
        TZ = <any> 'TZ',
        UA = <any> 'UA',
        UG = <any> 'UG',
        UM = <any> 'UM',
        US = <any> 'US',
        UY = <any> 'UY',
        UZ = <any> 'UZ',
        VA = <any> 'VA',
        VC = <any> 'VC',
        VE = <any> 'VE',
        VG = <any> 'VG',
        VI = <any> 'VI',
        VN = <any> 'VN',
        VU = <any> 'VU',
        WF = <any> 'WF',
        WS = <any> 'WS',
        YE = <any> 'YE',
        YT = <any> 'YT',
        ZA = <any> 'ZA',
        ZM = <any> 'ZM',
        ZW = <any> 'ZW'
    }
    export enum TypeEnum {
        IBAN = <any> 'IBAN',
        GB = <any> 'GB',
        US = <any> 'US',
        CA = <any> 'CA',
        OTHER = <any> 'OTHER'
    }
}
