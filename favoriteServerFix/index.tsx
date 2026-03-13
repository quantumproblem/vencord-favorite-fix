/*
 * Vencord, a Discord client mod
 * Copyright (c) 2026 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import definePlugin from "@utils/types";

export default definePlugin({
    name: "FavoriteServerFix",
    description: "Enables toggling the Favorites server without Nitro.",
    authors: [
        {
            name: "Kevin",
            id: 0n
        }
    ],
    patches: [
        // Patch to enable toggling Favorites server
        {
            find: "={isPremium",
            replacement: {
                match: /(isPremiumExactly:)\i/,
                replace: "$1() => true"
            }
        }
    ]
});
