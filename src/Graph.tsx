import { Gitgraph, TemplateName } from "@gitgraph/react";
import { templateExtend } from "@gitgraph/core";
import type { GitgraphMergeOptions } from "@gitgraph/core";

const myTemplate = templateExtend(
  // TemplateName.BlackArrow,
  TemplateName.Metro,
  {
    commit: {
      message: {
        displayAuthor: false,
        displayHash: false,
      }
    },
  }
);

export function Graph() {
  const props = {
    options: {
      template: myTemplate,
      branchLabelOnEveryCommit: true,
    },
  }

  return (
    <Gitgraph {...props}>
      {(gitgraph) => {
        const main = gitgraph.branch(
          {
            name: "main",
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            renderLabel: (_branch) => {
              return (
                <text></text>
              )
            }
          }
        )
        main.commit({
          subject: "Init",
        });

        const highSchool = main
          .branch("高校")
          .commit({
            subject: "2013-04 高校 入学",
            body: "高等学校 入学"
          })
          .commit({
            subject: "2016-03 高校 卒業",
            body: "高等学校 卒業"
          });
        main.merge({
          branch: highSchool,
          commitOptions: {
            style: {
              message: {
                display: false,
              }
            }
          }
        } as GitgraphMergeOptions<React.ReactElement<SVGElement>>);

        const university = main
          .branch("大学")
          .commit({
            subject: "2016-04 大学入学",
            body: "上智大学 理工学部 情報理工学科 入学"
          });

        const internshipKabuku = main.branch("インターン1")
        internshipKabuku.commit({
          subject: "2017-11 インターン開始",
          body: "会社：株式会社カブク 職種：機械学習エンジニア",
        })
        internshipKabuku.commit({
          subject: "2018-08 インターン終了",
          body: "会社：株式会社カブク 職種：機械学習エンジニア"
        })
        main.merge(internshipKabuku, " ");

        const internshipGhelia = main.branch("インターン2")
        internshipGhelia.commit({
          subject: "2018-09 インターン開始",
          body: "会社：ギリア株式会社 職種：機械学習エンジニア"
        })
        university.commit({
          subject: "2019-05 休学",
          body: "家族の病気の都合により実家に帰省"
        })
        university.commit({
          subject: "2020-04 復学",
          body: "上智大学 理工学部 情報理工学科 復学"
        })

        university.commit({
          subject: "2021-03 卒業 (学士取得)",
          body: "上智大学 理工学部 情報理工学科 卒業"
        });
        main.merge(university, " ");

        const univMaster = main.branch("大学院")
        univMaster.commit({
          subject: "2021-04 大学院 入学",
          body: "上智大学大学院 理工学専攻 情報学領域 山中研究室 入学"
        })

        internshipGhelia.commit({
          subject: "2021-11 インターン終了",
          body: "会社：ギリア株式会社 職種：機械学習エンジニア"
        })
        main.merge(internshipGhelia, " ");

        const internshipKlab = main.branch("インターン3")
        internshipKlab.commit({
          subject: "2021-12 KLab 短期インターン (5日間)",
          body: "会社：KLab株式会社 職種：サーバーサイドエンジニア コース：Server Side Camp #1"
        })
        internshipKlab.commit({
          subject: "2022-03 KLab 短期インターン (5日間)",
          body: "会社：KLab株式会社 職種：ネットワークエンジニア コース：KLab Expert Camp #5 (発展コース) 『TCP/IP 自作プロトコルスタックの作成とMikanOS (自作OS) への組み込み (mikanos-net) 再現実装』"
        })
        main.merge(internshipKlab, " ");

        univMaster.commit({
          subject: "2023-03 卒業 (修士取得)",
          body: "上智大学大学院 理工学専攻 情報学領域 山中研究室 卒業"
        })
        main.merge(univMaster, " ");


        const klab = main.branch("KLab")
        klab.commit({
          subject: "2023-04 入社",
          body: "会社：KLab株式会社 職種：SRE"
        })
        klab.commit({
          subject: "2025-06 退社",
          body: "会社：KLab株式会社 職種：SRE"
        })
        main.merge(klab, " ");
      }}
    </Gitgraph>
  );
}
