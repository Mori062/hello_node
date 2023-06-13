/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   sum_args.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: morishitashoto <morishitashoto@student.    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/13 13:13:57 by morishitash       #+#    #+#             */
/*   Updated: 2023/06/13 15:16:28 by morishitash      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

let sum = 0;

for (let i = 2; i < process.argv.length; ++i)
	sum += parseInt(process.argv[i]);
if (process.argv.length <= 2)
	console.log("No arguments");
else if (sum != sum)
	console.log("Some items could not be converted to numbers.");
else
	console.log(sum);
