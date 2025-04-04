// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import axios from 'axios'

let serverUrl = process.env.VUE_APP_API_URL

export default {
    async getAllProducts() {
        return await axios.get(serverUrl+"/api/getAllProducts");
    },
}
