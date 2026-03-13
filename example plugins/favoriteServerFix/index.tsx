/*
 * Vencord userplugin: Favorite Server Fix
 *
 * This plugin applies a patch to allow toggling the "Favorites" server in the Guild List.
 *
 * See the provided docs (mhtml) and existing example plugins for how to structure a Vencord userplugin.
 */

import definePlugin from "@utils/types";

export default definePlugin({
    name: "FavoriteServerFix",
    description: "Allows toggling the Favorites server by bypassing the premium check.",
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
