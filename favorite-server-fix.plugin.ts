/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 *
 * This is a standalone userplugin that applies only the "favorite server"
 * patch described in the provided docs (see "Creating Plugins _ Vencord Docs.mhtml").
 */

import definePlugin from "@utils/types";

export default definePlugin({
    name: "Favorite Server Fix",
    description: "Enables toggling favorite servers by bypassing the premium check.",
    authors: [],
    patches: [
        {
            find: "={isPremium",
            replacement: {
                match: /(isPremiumExactly:)\i/,
                replace: "$1() => true"
            }
        }
    ]
});
