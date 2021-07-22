import baseStyle, {ThemedStyledInterface} from "styled-components";

export const theme = {
    PRIMARY_0: '#474ABC', // PRIMARY COLOR */
    PRIMARY_1: '#AE8CE2',
    PRIMARY_2: '#8C5FCF',
    PRIMARY_3: '#5A21AF',
    PRIMARY_4: '#202225',
    SECONDARY_1_0: '#30B698', // MAIN SECONDARY COLOR (1) */
    SECONDARY_1_1: '#81DFCA',
    SECONDARY_1_2: '#52CAAF',
    SECONDARY_1_3: '#12A785',
    SECONDARY_1_4: '#028568',
    SECONDARY_2_0: '#FF5644', // MAIN SECONDARY COLOR (2) */
    SECONDARY_2_1: '#FF9E94',
    SECONDARY_2_2: '#FF7668',
    SECONDARY_2_3: '#FF311B',
    SECONDARY_2_4: '#CF1603',
    FOREGROUND: '#333',
    FOREGROUND_REVERSE: '#fff',
};

export type Theme = typeof theme;
export const styled = baseStyle as ThemedStyledInterface<Theme>;