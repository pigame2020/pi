class Lang {

    zh_CN={
        project:{
            title:"合约详情",
            contractAddress:"合约地址",
            balanceSero:"当前余额 (SERO)",
        },

        account:{
            title:{
                utxo:"钱包账户",
                contract:"合约账户",
                swith:"切换账户",
                balanceSero:"余额 (SERO)",
                estimatedTotal:"预计总收益 (SERO)",
                dayIncome:"当天返还比例",
                staticIncome:"当天静态返还 (SERO)",
                withdraw:"可提现金额 (SERO)",
                detail:"详情",
                id:"编号",
                referId:"推荐人编号",
                areaId:"大区编号",
                totalInvest:"本金",
                profitLevel:"收益倍数",
                latestTime:"最新收益时间",
                totalReturn:"当前返还总数(SERO)",
                totalReturnDay:"当天返还总数(SERO)",
                recommend:"下级人数",
                staticIncomeTips:"今天的静态收益已经支付到可提现账户.",
                staticIncomeTips2:"触发收益到提现账户.",
                investDetail:"投资详情",
                myIncome:"我的业绩",
                areaTotal:"大区业绩",
                areaOtherTotal:"业绩总和(不含大区)",

                staticReward:"静态返还",
                recommendReward:"推荐奖",
                nobilityReward:"星级奖",
                vipReward:"VIP奖",
                viewCode:"查看智能合约",

            },
            button:{
                deposit:"充值",
                invest:"投资",
                trigger:"触发收益",
                withdraw:"提现",
                close:"关闭",
                copy:"拷贝",
            },
            modal:{
                deposit:{
                    title:"充值",
                    copy:"拷贝",
                },

                invest:{
                    title:"投资",
                    referId:"推荐人编号",
                    amount:"投资金额",
                    amountTips:"100 SERO起投",
                    ticket:"门票",
                    availableSERO:"可用的余额",
                    availableExchange:"最多可抵用",
                    total:"应付合计",
                    estimate:"预计收益",
                    password:"账户密码",
                    passwordPlace:"输入账户密码",
                },

                trigger:{
                    password:"账户密码",
                    passwordPlace:"输入账户密码",
                },

                withdraw:{
                    password:"账户密码",
                    passwordPlace:"输入账户密码",
                    tips:"* 提现金额将直接提到UTXO账户.",
                },
            },
        },
        toast:{
            lessAmount:"SERO余额不足以支付本次交易.",
            minInvest:"最小投资金额为 1000 SERO.",
            tx:"交易提交成功, 等待区块打包交易, 交易哈希: ",
            copySuccess:"拷贝成功! ",

        }
    };

    en_US={
        project:{
            title:"Contract Info",
            contractAddress:"Contract Address",
            balanceSero:"Current Balance (SERO)",
        },

        account:{
            title:{
                utxo:"Wallet Account",
                contract:"Contract Account",
                swith:"Switch Account",
                balanceSero:"Balance (SERO)",
                estimatedTotal:"Estimated Total Income (SERO)",
                dayIncome:"Return rate on the day",
                staticIncome:"Static Return (SERO)",
                withdraw:"Withdrawal Account (SERO)",
                detail:"Detail",
                id:"ID",
                referId:"Refer ID",
                areaId:"Large Area ID",
                totalInvest:"Total Invest",
                profitLevel:"Profit Level",
                latestTime:"Latest Share Time",
                totalReturn:"Total Return",
                totalReturnDay:"Total return on the day (SERO)",
                recommend:"Recommend Number",
                staticIncomeTips:"Your income have been paid to the withdrawal account.",
                staticIncomeTips2:"Trigger to withdrawal account. ",
                investDetail:"Invest Info",
                myIncome:"My performance",
                areaTotal:"Regional performance",
                areaOtherTotal:"Total performance (excluding the large region)",

                staticReward:"Static",
                recommendReward:"Recommend",
                nobilityReward:"Nobility",
                vipReward:"VIP",
                viewCode:"View Smart Contract",
            },
            button:{
                deposit:"Deposit SERO",
                invest:"Invest",
                trigger:"Trigger Income",
                withdraw:"Withdraw",
                close:"Close",
                copy:"Copy",
            },
            modal:{
                deposit:{
                    title:"Deposit",
                    copy:"COPY",
                },

                invest:{
                    title:"Invest",
                    referId:"Refer ID",
                    ticket:"Tickets",
                    amount:"Invet Amount",
                    amountTips:"At least invest 100 SERO",
                    availableSERO:"Available Blance",
                    availableExchange:"Max Exchange",
                    total:"Total",
                    estimate:"Estimated Return",
                    password:"Password",
                },

                trigger:{
                    password:"Password",
                },

                withdraw:{
                    password:"Password",
                    tips:"* This is the withdrawal of the amount to the UTXO account.",
                },
            },
        },
        toast:{
            lessAmount:"The balance is not enough to pay for this transaction.",
            minInvest:"Invest Amount at least 100 SERO.",
            tx:"The transaction was submitted successfully, waiting for the block to be packaged, and the transaction hash: ",
            copySuccess:"Copy to clipboard successfully! ",
        },
    }
}

export default Lang